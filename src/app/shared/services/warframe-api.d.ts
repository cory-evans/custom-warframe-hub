declare namespace WarframeApi {
  export interface CountedItem {
    count: number;
    type: string;
  }

  export interface Reward {
    countedItems: CountedItem[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface Mission {
    reward: Reward;
    node: string;
    nodeKey: string;
    faction: string;
    factionKey: string;
    maxEnemyLevel: number;
    minEnemyLevel: number;
    maxWaveNum: number;
    type: string;
    typeKey: string;
    nightmare: boolean;
    archwingRequired: boolean;
    isSharkwing: boolean;
    enemySpec: string;
    levelOverride: string;
    advancedSpawners: string[];
    requiredItems: string[];
    consumeRequiredItems: boolean;
    leadersAlwaysAllowed: boolean;
    levelAuras: string[];
    description: string;
  }

  export interface Alert {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    mission: Mission;
    expired: boolean;
    eta: string;
    rewardTypes: string[];
  }

  export interface Arbitration {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    node: string;
    enemy: string;
    enemyKey: string;
    type: string;
    typeKey: string;
    archwing: boolean;
    sharkwing: boolean;
  }

  export interface CountedItem2 {
    count: number;
    type: string;
  }

  export interface Reward2 {
    countedItems: CountedItem2[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface Mission2 {
    reward: Reward2;
    node: string;
    nodeKey: string;
    faction: string;
    factionKey: string;
    maxEnemyLevel: number;
    minEnemyLevel: number;
    maxWaveNum: number;
    type: string;
    typeKey: string;
    nightmare: boolean;
    archwingRequired: boolean;
    isSharkwing: boolean;
    enemySpec: string;
    levelOverride: string;
    advancedSpawners: string[];
    requiredItems: string[];
    consumeRequiredItems: boolean;
    leadersAlwaysAllowed: boolean;
    levelAuras: string[];
    description: string;
  }

  export interface ArchonHunt {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    rewardPool: string;
    missions: Mission2[];
    boss: string;
    faction: string;
    factionKey: string;
    expired: boolean;
    eta: string;
  }

  export interface CambionCycle {
    id: string;
    expiry: string;
    activation: string;
    active: string;
    timeLeft: string;
  }

  export interface CetusCycle {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    isDay: boolean;
    state: string;
    timeLeft: string;
    isCetus: boolean;
    shortString: string;
  }

  export interface ConclaveChallenge {
    mode: string;
    amount: number;
    eta: string;
    expired: boolean;
    endString: string;
    daily: boolean;
    description: string;
    id: string;
    expiry: string;
    asString: string;
    category: string;
    rootChallenge: boolean;
  }

  export interface ConstructionProgress {
    id: string;
    fomorianProgress: string;
    razorbackProgress: string;
    unknownProgress: string;
  }

  export interface DailyDeal {
    sold: number;
    item: string;
    total: number;
    eta: string;
    originalPrice: number;
    salePrice: number;
    discount: number;
    expiry: string;
    id: string;
  }

  export interface History {
    defender: string;
    defenderIsAlliance: boolean;
    attacker: string;
    winner: string;
    start: string;
    end: string;
  }

  export interface DarkSector {
    defenderMOTD: string;
    deployerName: string;
    defenderDeploymentActivation: number;
    defenderName: string;
    deployerClan: string;
    isAlliance: boolean;
    id: string;
    history: History[];
  }

  export interface EarthCycle {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    isDay: boolean;
    timeLeft: string;
  }

  export interface CountedItem3 {
    count: number;
    type: string;
  }

  export interface Reward3 {
    countedItems: CountedItem3[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface Job {
    activation: Date;
    expiry: Date;
    rewardPool: string[];
    type: string;
    enemyLevels: number[];
    standingStages: number[];
    minMR: number;
  }

  export interface CountedItem4 {
    count: number;
    type: string;
  }

  export interface Reward4 {
    countedItems: CountedItem4[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface Message {
    sender: string;
    subject: string;
    message: string;
    senderIcon: string;
    attachments: string[];
  }

  export interface InterimStep {
    goal: number;
    reward: Reward4;
    message: Message;
    winnerCount: number;
  }

  export interface ProgressStep {
    type: string;
    progressAmt: number;
  }

  export interface Metadata {}

  export interface NextAlt {
    expiry: Date;
    activation: Date;
  }

  export interface Event {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    maximumScore: number;
    currentScore: number;
    smallInterval: number;
    largeInterval: number;
    faction: string;
    description: string;
    tooltip: string;
    node: string;
    concurrentNodes: string[];
    victimNode: string;
    scoreLocTag: string;
    rewards: Reward3[];
    health: number;
    affiliatedWith: string;
    jobs: Job[];
    interimSteps: InterimStep[];
    progressSteps: ProgressStep[];
    progressTotal: number;
    showTotalAtEndOfMission: boolean;
    isPersonal: boolean;
    isCommunity: boolean;
    regionDrops: string[];
    archwingDrops: string[];
    asString: string;
    metadata: Metadata;
    completionBonuses: number[];
    scoreVar: string;
    altExpiry: Date;
    altActivation: Date;
    nextAlt: NextAlt;
  }

  export interface Fissure {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    node: string;
    expired: boolean;
    eta: string;
    missionType: string;
    missionKey: string;
    tier: string;
    tierNum: number;
    enemy: string;
    enemyKey: string;
    isStorm: boolean;
    isHard: boolean;
  }

  export interface FlashSale {
    item: string;
    expired: boolean;
    eta: string;
    discount: number;
    premiumOverride: number;
    isPopular: boolean;
    isFeatured: boolean;
  }

  export interface GlobalUpgrade {
    start: string;
    end: string;
    upgrade: string;
    operation: string;
    operationSymbol: string;
    upgradeOperationValue: number;
    expired: boolean;
    eta: string;
    desc: string;
  }

  export interface CountedItem5 {
    count: number;
    type: string;
  }

  export interface Reward5 {
    countedItems: CountedItem5[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface Attacker {
    reward: Reward5;
    faction: string;
    factionKey: string;
  }

  export interface CountedItem6 {
    count: number;
    type: string;
  }

  export interface AttackerReward {
    countedItems: CountedItem6[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface CountedItem7 {
    count: number;
    type: string;
  }

  export interface Reward6 {
    countedItems: CountedItem7[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface Defender {
    reward: Reward6;
    faction: string;
    factionKey: string;
  }

  export interface CountedItem8 {
    count: number;
    type: string;
  }

  export interface DefenderReward {
    countedItems: CountedItem8[];
    thumbnail: string;
    color: number;
    credits: number;
    asString: string;
    items: string[];
    itemString: string;
  }

  export interface Invasion {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    attacker: Attacker;
    attackerReward: AttackerReward;
    attackingFaction: string;
    completed: boolean;
    completion: number[];
    count: number;
    defender: Defender;
    defenderReward: DefenderReward;
    defendingFaction: string;
    desc: string;
    eta: string;
    node: string;
    nodeKey: string;
    requiredRuns: number;
    rewardTypes: string[];
    vsInfestation: boolean;
  }

  export interface Kuva {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    node: string;
    enemy: string;
    enemyKey: string;
    type: string;
    typeKey: string;
    archwing: boolean;
    sharkwing: boolean;
  }

  export interface Translations {
    es: string;
  }

  export interface News {
    date: string;
    imageLink: string;
    eta: string;
    primeAccess: boolean;
    stream: boolean;
    translations: Translations;
    link: string;
    update: boolean;
    id: string;
    asString: string;
    message: string;
    priority: boolean;
  }

  export interface Params {}

  export interface PossibleChallenge {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    isDaily: boolean;
    isElite: boolean;
    title: string;
    desc: string;
    reputation: number;
  }

  export interface ActiveChallenge {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    isDaily: boolean;
    isElite: boolean;
    title: string;
    desc: string;
    reputation: number;
  }

  export interface Nightwave {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    params: Params;
    rewardTypes: string[];
    season: number;
    tag: string;
    phase: number;
    possibleChallenges: PossibleChallenge[];
    activeChallenges: ActiveChallenge[];
  }

  export interface PersistentEnemy {
    locationTag: string;
    agentType: string;
    rank: number;
    healthPercent: number;
    fleeDamage: number;
    region: string;
    lastDiscoveredTime: string;
    lastDiscoveredAt: string;
    isDiscovered: boolean;
    isUsingTicketing: boolean;
    pid: string;
  }

  export interface Simaris {
    target: string;
    isTargetActive: boolean;
    asString: string;
  }

  export interface Variant {
    node: string;
    boss: string;
    missionType: string;
    planet: string;
    modifier: string;
    modifierDescription: string;
  }

  export interface Sortie {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    rewardPool: string;
    variants: Variant[];
    boss: string;
    faction: string;
    factionKey: string;
    expired: boolean;
    eta: string;
  }

  export interface CurrentReward {
    name: string;
    cost: number;
  }

  export interface Rotation {
    name: string;
    cost: number;
  }

  export interface Evergreen {
    name: string;
    cost: number;
  }

  export interface Incursions {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
  }

  export interface SteelPath {
    activation: Date;
    expiry: Date;
    currentReward: CurrentReward;
    remaining: string;
    rotation: Rotation[];
    evergreens: Evergreen[];
    incursions: Incursions;
  }

  export interface Job2 {
    activation: Date;
    expiry: Date;
    rewardPool: string[];
    type: string;
    enemyLevels: number[];
    standingStages: number[];
    minMR: number;
  }

  export interface SyndicateMission {
    nodes: string[];
    eta: string;
    jobs: Job2[];
    syndicate: string;
    id: string;
    expiry: Date;
    activation: Date;
  }

  export interface VallisCycle {
    id: string;
    expiry: string;
    timeLeft: string;
    isWarm: boolean;
  }

  export interface Inventory {
    item: string;
    ducats: number;
    credits: number;
  }

  export interface VoidTrader {
    id: string;
    activation: Date;
    expiry: Date;
    startString: string;
    active: boolean;
    character: string;
    location: string;
    inventory: Inventory[];
    psId: string;
    endString: string;
  }

  export interface WorldState {
    timestamp: string;
    alerts: Alert[];
    arbitration: Arbitration;
    archonHunt: ArchonHunt;
    cambionCycle: CambionCycle;
    cetusCycle: CetusCycle;
    conclaveChallenges: ConclaveChallenge[];
    constructionProgress: ConstructionProgress;
    dailyDeals: DailyDeal[];
    darkSectors: DarkSector[];
    earthCycle: EarthCycle;
    events: Event[];
    fissures: Fissure[];
    flashSales: FlashSale[];
    globalUpgrades: GlobalUpgrade[];
    invasions: Invasion[];
    kuva: Kuva[];
    news: News[];
    nightwave: Nightwave;
    persistentEnemies: PersistentEnemy[];
    simaris: Simaris;
    sortie: Sortie;
    steelPath: SteelPath;
    syndicateMissions: SyndicateMission[];
    vallisCycle: VallisCycle;
    voidTrader: VoidTrader;
  }
}
