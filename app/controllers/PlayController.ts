import { Request, Response } from "../../type";

class PlayController {
  public async showGame(req: Request, res: Response) {
    const level = parseInt(req.query.level as string) || 1;
    const maxLevel = 4; // Keep maxLevel at 4 since bonus level is extra

    // Handle bonus level separately
    if (level === 5) {
      return res.inertia('Play/BonusLevel', {
        currentLevel: level,
        maxLevel
      });
    }

    // Ensure level is within bounds for main levels
    if (level < 1 || level > maxLevel) {
      return res.redirect('/play?level=1');
    }

    // Map level numbers to their component names
    const levelComponents = {
      1: 'Play/Game',
      2: 'Play/Level2',
      3: 'Play/Level3',
      4: 'Play/Level4'  // Final Level - Interview
    };

    return res.inertia(levelComponents[level], {
      currentLevel: level,
      maxLevel
    });
  }
}

export default new PlayController(); 