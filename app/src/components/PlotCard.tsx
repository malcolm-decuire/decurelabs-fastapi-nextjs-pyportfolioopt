//20250119 UPDATES FOR TRAINING PURPOSES
"use client";

import React, { useState, useEffect } from "react";
import { Skeleton, Card, CardBody, Button } from "@heroui/react"; // Using the imports you mentioned
import Plot from "./Plot"; // Plot component
import ModalWithAccordion from "./ModalAccordion"; // Import ModalWithAccordion component

interface PlotCardProps {
  name: string;
  endpoint: string;
}

const PlotCard: React.FC<PlotCardProps> = ({ name, endpoint }) => {
  const [plotData, setPlotData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch plot data
  const fetchPlotData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`http://127.0.0.1:8000${endpoint}`);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      setPlotData(data);
    } catch (err) {
      console.error(`Failed to fetch plot data for ${name}`, err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount or when endpoint changes
  useEffect(() => {
    fetchPlotData();
  }, [endpoint]);

  return (
    <>
      {/* Main Card */}
      <Card className="relative w-full max-w-[800px] mx-auto p-4 transition-all duration-300">
        <CardBody className="bg-gradient-to-br from-content1 to-default-100/50 p-6 rounded-lg shadow-md">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Skeleton className="h-6 w-3/5 rounded-lg" /> {/* Show loading skeleton */}
            </div>
          ) : isError ? (
            <div className="text-center">
              <p className="text-small text-error">Failed to load {name} data.</p>
              <Button color="primary" onPress={fetchPlotData}>
                Retry
              </Button>
            </div>
          ) : plotData ? (
            <>
              <h3 className="text-medium font-bold text-foreground">{name}</h3>
              <Plot
                data={plotData.data}
                layout={{
                  autosize: true,
                  width: window.innerWidth < 768 ? 300 : 800,
                  height: 300,
                  margin: { t: 20, l: 40, r: 40, b: 40 },
                }}
                config={{ responsive: true }}
              />
              <Button
                className="mt-4 mx-auto block" // Center the button
                color="primary"
                onPress={() => setIsModalOpen(true)} // Open the modal on click
              >
                ℹ More Info
              </Button>
            </>
          ) : null}
        </CardBody>
      </Card>

      {/* Modal for Expanded Plot */}
      {isModalOpen && (
        <ModalWithAccordion onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default PlotCard;
