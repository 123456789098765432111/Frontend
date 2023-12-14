import {Video} from "@/models/Video";
import dbConnect from "@/lib/dbConnect";

export default async function handle(req, res) {
    const { method } = req;
    await dbConnect();
  
    if (method === 'GET') {
        try {
            const videos = await Video.find({});
            res.status(200).json({ success: true, data: videos });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Error finding videos' });
        }
    }
}
