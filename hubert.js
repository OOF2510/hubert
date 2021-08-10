#!/usr/bin/env node

import terminalImage from "terminal-image";
import got from "got";

const hubert = await got(
  "https://images-ext-2.discordapp.net/external/lQGpg_fXK0AmqHRTTwFLz0Yl4KYGLfdgczjI1N71LIs/https/media.discordapp.net/attachments/865767428125229091/874675373869260834/hubert.png"
).buffer();
console.log(await terminalImage.buffer(hubert));
