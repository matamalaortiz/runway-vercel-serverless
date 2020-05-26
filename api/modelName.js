import { HostedModel } from '@runwayml/hosted-models';

module.exports = async (req, res) => {
    // Abort request if it isn't a POST.
    if (req.method.toUpperCase() !== "POST") {
      res.status(405).json({
        error: `Method Not Allowed. Expected "POST", got "${req.method}".`
      });
      return;
    }
  
    const payload = req.body

    const model = new HostedModel({
      	// Replace this with the URL and Token of your hosted model (https://learn.runwayml.com/#/how-to/hosted-models)
        url:  "https://example-text-generator.hosted-models.runwayml.cloud/v1",
        token: "",
    });
      
    const result = await model.query(payload);
    return res.status(200).json(result); 
};
