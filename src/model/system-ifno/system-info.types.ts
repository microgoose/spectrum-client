export interface ServiceVersion {
  name: string;
  version: string;
  time: string;
  artifact: string;
  group: string;
  javaVersion: string;
  userName: string;
}

export interface DatabaseVersion {
  installedRank: number;
  version: string;
  description: string;
  type: string;
  script: string;
  installedBy: string;
  installedDate: string;
  executionTime: number;
  success: boolean;
}
