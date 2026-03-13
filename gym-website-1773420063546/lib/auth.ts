import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY || 'default-secret-key';

export function generateToken(user: { id: number; email: string }) {
  return jwt.sign({ user }, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}