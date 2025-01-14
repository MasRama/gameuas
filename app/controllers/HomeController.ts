import { Response, Request } from "../../type"; 
import { view } from "../services/View";

class Controller {
    
    public async index (request : Request,response : Response) { 
        return response.inertia('home')
    }

    public async about (request : Request,response : Response) { 
        return response.inertia('About')
    }

    public async techStack (request : Request,response : Response) { 
        return response.inertia('TechStack')
    }
}

export default new Controller()
