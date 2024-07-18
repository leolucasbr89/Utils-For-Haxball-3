

export type idioms = "en"|"pt"|"es"
export type Position = {x: number, y: number}

export type Team =  {
    shirt: {angle: number, textColor: number, colors: ReadonlyArray<number>},
    name: string,
    cheerphrases: string[]
    color: number,
    region?: string
}


export declare function HBInit(roomConfig: RoomConfigObject): RoomObject;

export interface RoomConfigObject {
    roomName?: string;
    playerName?: string;
    password?: string;
    maxPlayers?: number;
    public?: boolean;
    geo?: {"code": string, "lat": number, "lon": number};
    token?: string;
    noPlayer?: boolean;
}

 export interface  RoomObject {
    sendChat(msg: string, targetId: number): void;
    setPlayerAdmin(playerId: number, admin: boolean): void;
    setPlayerTeam(playerId: number, team: number): void;
    kickPlayer(playerId: number, reason: string, ban: boolean): void;
    clearBan(playerId: number): void;
    clearBans(): void;
    setScoreLimit(limit: number): void;
    setTimeLimit(limitInMinutes: number): void;
    setCustomStadium(stadiumFileContents: string): void;
    setDefaultStadium(stadiumName: string): void;
    setTeamsLock(locked: boolean): void;
    setTeamColors(team: TeamID, angle: number, textColor: number, colors: ReadonlyArray<number>): void;
    startGame(): void;
    stopGame(): void;
    pauseGame(pauseState: boolean): void;
    getPlayer(playerId: number): PlayerObject;
    getPlayerList(): PlayerObject[];
    getScores(): ScoresObject;
    getBallPosition():Position
    startRecording(): void;
    stopRecording(): Uint8Array;
    setPassword(pass: string): void;
    setRequireCaptcha(required: boolean): void;
    reorderPlayers(playerIdList: ReadonlyArray<number>, moveToTop: boolean): void;
    sendAnnouncement(msg: string, targetId?: number, color?: number, style?: string, sound?: number): void;
    setKickRateLimit(min: number, rate: number, burst: number): void;
    setPlayerAvatar(playerId: number, avatar: string): void;
    setDiscProperties(discIndex: number, properties: DiscPropertiesObject): void;
    getDiscProperties(discIndex: number): DiscPropertiesObject;
    setPlayerDiscProperties(playerId: number, properties: DiscPropertiesObject): void;
    getPlayerDiscProperties(playerId: number): DiscPropertiesObject;
    getDiscCount(): number;
    CollisionFlags: CollisionFlagsObject;
    onPlayerJoin(player: PlayerObject): void;
    onPlayerLeave(player: PlayerObject): void;
    onTeamVictory(scores: ScoresObject): void;
    onPlayerChat(player: PlayerObject, msg: string): any;
    onPlayerBallKick(player: PlayerObject): void;
    onTeamGoal(team: TeamID): void;
    onGameStart(byPlayer: PlayerObject): void;
    onGameStop(byPlayer: PlayerObject): void;
    onPlayerAdminChange(changedPlayer: PlayerObject, byPlayer: PlayerObject): void;
    onPlayerTeamChange(changedPlayer: PlayerObject, byPlayer: PlayerObject): void;
    onPlayerKicked(kickedPlayer: PlayerObject, reason: string, ban: boolean, byPlayer: PlayerObject): void;
    onGameTick(): void;
    onGamePause(byPlayer: PlayerObject): void;
    onGameUnpause(byPlayer: PlayerObject): void;
    onPositionsReset(): void;
    onPlayerActivity(player: PlayerObject): void;
    onStadiumChange(newStadiumName: string, byPlayer: PlayerObject): void;
    onRoomLink(url: string): void;
    onKickRateLimitSet(min: number, rate: number, burst: number, byPlayer: PlayerObject): void;
    onTeamsLockChange(boolean: boolean, player: PlayerObject): void
}

export interface PlayerObject {
    id: number;
    name: string;
    team: TeamID;
    admin: boolean;
    position: Position;
    conn: string;
    auth: string;
}


export interface ScoresObject {
    red: number;
    blue: number;
    time: number;
    scoreLimit: number;
    timeLimit: number;
}

export type TeamID = 0 | 1 | 2;
export type ActiveTeams = Exclude<TeamID, 0>

export interface DiscPropertiesObject {
    x?: number;
    y?: number;
    xspeed?: number;
    yspeed?: number;
    xgravity?: number;
    ygravity?: number;
    radius?: number;
    bCoeff?: number;
    invMass?: number;
    damping?: number;
    color?: number;
    cMask?: number;
    cGroup?: number;
}

export type CollisionFlagsObject = {
    "ball": 1,  "red": 2, "blue": 4, 
    "redKO": 8, "blueKO": 16, "wall": number, "all": 63,
     "kick": 64, "score": 128, 
     "c0": 268435456, "c1": 536870912, "c2": 
     1073741824, "c3": -2147483648, "c4": number
}


export interface EventInterface {
    Event(...args: any[]): Promise<any>;
}

