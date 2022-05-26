import { createCaptcha } from "@slider-captcha-v2/core";
export default async function handler(req: any, res: any) {
  createCaptcha()
    .then((resp: any) => {
      console.log(resp);
      res.status(200).send(resp.data);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
}
