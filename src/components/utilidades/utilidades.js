import { useState } from "react"
import  data  from "../mock/data.json"

export const pedirDatos = () => {
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 3000)
    })
}