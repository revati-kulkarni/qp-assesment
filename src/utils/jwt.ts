import jwt from "jsonwebtoken";

export const generateToken = (payload: object, expiresIn = "1h"): string => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};
