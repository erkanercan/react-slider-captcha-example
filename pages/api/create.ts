var sliderCaptcha = require("@slider-captcha/core");

export default function handler(req: any, res: any) {
  sliderCaptcha.create().then(function (resp: any) {
    res.status(200).send(resp.data);
  });
}
