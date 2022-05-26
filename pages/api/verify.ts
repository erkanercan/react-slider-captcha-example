import { verifyCaptcha } from "@slider-captcha-v2/core";

export default function handler(req: any, res: any) {
  verifyCaptcha(req.session.captcha, req.body).then(function (
    verification: any
  ) {
    res.status(200).send(verification);
  });
}
