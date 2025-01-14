import { Request, Response } from "../../type";

class PlayController {
  public async showGame(req: Request, res: Response) {
    return res.inertia('Play/Game', {
      currentLevel: 1,
      maxLevel: 5
    });
  }
}

export default new PlayController(); 