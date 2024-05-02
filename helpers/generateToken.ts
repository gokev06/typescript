import jwt from "jsonwebtoken";
import { secretKey } from "../config/config-db";
import { promises } from "dns";

export function generateToken(email:string): Promise<string>{
    return new Promise((resolve, reject) => {
        jwt.sign({email}, secretKey, {expiresIn: '2h'}, (error,token)=>{
            if(error){
                reject(error)
            }else{
                if (token){
                    resolve(token);
                }else{
                    reject(new Error("Token no generado")); 
                }
            }
        })
    })
}