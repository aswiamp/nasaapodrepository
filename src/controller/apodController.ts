import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors';
import { Apod } from '../models'; 
import axios from 'axios';

const NASA_API_KEY = process.env.NASA_API_KEY;

//get data from api and store it in database
export const getAPOD = async (req: Request, res: Response): Promise<void> => {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key: NASA_API_KEY,
            },
        });
        const apodData = {
            date: response.data.date,
            explanation: response.data.explanation,
            title: response.data.title,
            url: response.data.url,
        };
        //check it in already in database
        const existingEntry = await Apod.findOne({ where: { date: apodData.date } });
        if(existingEntry){
            res.status(StatusCodes.OK).json(apodData);
        }
        else {
        await Apod.create(apodData);
         // Send the APOD data in the response
         res.status(StatusCodes.OK).json(apodData);
        }
    };
