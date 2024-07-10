import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Folder from "./folder.entity";

@Entity("videos")
class Video {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  url: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @ManyToOne(() => Folder, (folder) => folder.videos)
  @JoinColumn({ name: "folder_id" })
  folder: Folder;
}

export default Video;
