<p align="center">
  <a href="https://nextjs-fastapi-starter.vercel.app/">
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="96">
    <h3 align="center">NEXTJS + FASTAPI TEMPLATE</h3>
  </a>
</p>

<p align="center">A Decure Labs financial data science template using NEXTJS TS for the FRONTEND &  <a href="https://fastapi.tiangolo.com/">FastAPI</a> as the API BACKEND.</p>

<br/>

## CONTEXT
- Decure Labs wanted to experiment with developing Python Data apps w/ a more custom front-end 
- This repo is a hybrid NEXTJS 14 + PYTHON template for folks who are interested in making custom data applications that are mobile friendly. 
- This repo leverages NEXTJS route handlers & SSR

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/py/:path*` to the FastAPI API, which is hosted in the `/api` folder.

Also, the app/api routes are available on the same domain, so you can use NextJs Route Handlers and make requests to `/api/...`.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo


## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app nextjs-fastapi --example "https://github.com/digitros/nextjs-fastapi"
```

## Getting Started

First, create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Then, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server(python dependencies will be installed automatically here):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

```
# EXAMPLE COMMANDS FOR ACTIVATION FRONTEND & BACKEND

# LOCAL BACKEND -API
- cd /Users/malcolmdecuire/decuresolutions-dspn-fastapi-ts/decurelabs-fastapi-nextjs-pyportfolioopt/api
- PYTHONPATH=/Users/malcolmdecuire/decuresolutions-dspn-fastapi-ts/decurelabs-fastapi-nextjs-pyportfolioopt uvicorn main:app --reload
- USER SHOULD SEE: Uvicorn running on http://127.0.0.1:8000


# LOCAL FRONTEND - APP 
- cd /Users/malcolmdecuire/decuresolutions-dspn-fastapi-ts/decurelabs-fastapi-nextjs-pyportfolioopt/app
- yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

## NEXT STEPS
- Q22026: CLEAN UP UI/UX FEATS
- Q42026: DEVELOP YFINANCE IMPLEMENTATION
- CONTINUE TO LEARN MORE ABOUT FASTAPI

