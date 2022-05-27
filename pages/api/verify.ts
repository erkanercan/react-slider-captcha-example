/* eslint-disable react-hooks/rules-of-hooks */
import { verifyCaptcha } from "@slider-captcha-v2/core/lib/esm";
import { solution } from "./create";

export default async function handler(req: any, res: any) {
  verifyCaptcha(solution, req.body).then(function (verification: any) {
    res.status(200).send(verification);
  });
}
