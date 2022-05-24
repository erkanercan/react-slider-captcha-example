var sliderCaptcha = require("@slider-captcha/core");

export default function handler(req: any, res: any) {
  sliderCaptcha
    .verify(req.session.captcha, req.body)
    .then(function (verification: any) {
      res.status(200).send(verification);
    });
}
