import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Video from "./video.entity";

@Entity("folders")
class Folder {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  slug: string;

  @OneToMany(() => Video, (video) => video.folder)
  videos: Video[];
}

export default Folder;
