## RunwayML Hosted Models Vercel Serverless 

# Use

- Clone.
- In `/api` replace `modelName.js` with your model (or any other name for your endpoint).
- In `/api/modelName.js` replace `url` and `token`.
- Deploy to Vercel. 
- POST to `https://{replace-with-vercel-url.sh}/api/modelName`


# Test
```
curl -d '{"prompt":"Hello World"}' -H "Content-Type: application/json" -X POST https://{replace-with-vercel-url.sh}/api/modelName
```

