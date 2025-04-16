import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Image = {
    ID: any, //SQL BIGINT
    name: string;
    email: string;
    title: string;
    description: string;
    year: string;
    photos:string;
  };

type ImagesProps = {
    sources: string;
  };

const Images: React.FC<ImagesProps> = ({sources}) =>
{
    let urls = sources.split(',');

    return(
        urls.map((url) => (
            <img src ={`http://localhost:3001/pending/${url}`} style={{marginTop: "5px"}} width="150px" height="150px"></img>
        ))
    )
}

const Admin = () =>
{
    const [imageInfo, setImageInfo] = useState<Image[]>([]);
    const [rerender, setReRender] = useState(true);
    useEffect(() => {
        const getImageInfo = async () =>
        {
            try
            {
                const response = await axios.get('/api/upload/getPendingInfo');

                let result = [];
                let data = response.data.pendingImages
                for(let i = 0; i < data.length; i++)
                {
                    let temp:Image = {ID: 0, name: "", email: "", title: "", description: "", year: "", photos: ""};
                    temp.ID = data[i].ID;
                    temp.name = data[i].Name;
                    temp.email = data[i].Email;
                    temp.title = data[i].Title;
                    temp.description = data[i].Description;
                    temp.year = data[i].Year;
                    temp.photos = data[i].Photos;
                    
                    result.push(temp);
                }
                
                console.log(result)
                setImageInfo(result);
            }

            catch(err)
            {
                console.log("ERROR", err);
            }
        }


        getImageInfo();
    }, [rerender]);

    const approveImage = async (ID: any) =>
    {
        try
        {
            await axios.post('/api/upload/approveImage', {id: ID});
            setReRender(!rerender);
        }

        catch(err)
        {
            console.log(err);
        }
    }

    const rejectImage = async (ID: any) =>
    {
        try
        {
            await axios.post('/api/upload/rejectImage', {id: ID});
            setReRender(!rerender);
        }

        catch(err)
        {
            console.log(err);
        }

    }

    return(
        <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{marginTop: "100px"}}>
      {
            imageInfo.map((image) =>(
                <Card className="bg-amber-100 border-amber-200">
                <CardHeader className="pb-2">
                  <p className="text-sm text-amber-700 font-serif">{image.name}</p>
                  <CardTitle className="text-xl font-serif text-amber-900">
                    {image.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-amber-800">
                  <p className="mb-2">{image.description}</p>
                  <p className="mb-2">{image.email}</p>
                <Images sources={image.photos }/>
                </CardContent>
                <button type="button" onClick={() => approveImage(image.ID)} className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Approve</button>
                <button type="button" onClick={() => rejectImage(image.ID)} className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reject</button>

              </Card>
            ))
        }
      </div>
      </>
    )
}

export default Admin;