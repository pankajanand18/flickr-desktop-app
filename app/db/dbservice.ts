import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import Image from './Models/ImageP';
import { LocalImageFile } from '../components/Interaces';

export default class DbService {
  protected dbConnection: Connection | undefined;

  protected config: ConnectionOptions;

  constructor() {
    this.config = DbService.getMySQlDbConfig();
  }

  public async setDbConnection() {
    if (this.dbConnection === undefined) {
      this.dbConnection = await this.getDbConnection();
    }
  }

  public getImagesToPublish(): Promise<Image[]> | undefined {
    return this.dbConnection
      ?.getRepository(Image)
      .find({ where: { isPublished: 0 } });
  }

  public async saveImages(images: LocalImageFile[]): Promise<void> {
    if (this.dbConnection == null || this.dbConnection === undefined) {
      console.log('DB connection is not initialized');
      this.dbConnection = await this.getDbConnection();
    }

    for (let i = 0; i < images.length; i += 1) {
      const image = images[i];
      console.log(`saving ${image.path}`);
      const imageToSave = new Image();
      imageToSave.isPublished = false;
      imageToSave.path = image.path;
      imageToSave.name = image.name;
      // eslint-disable-next-line no-await-in-loop
      await this.dbConnection.getRepository(Image).save(imageToSave);
      // await imageToSave.save();
    }
  }

  protected getDbConnection() {
    if (
      process.env.MYSQL_SERVER === undefined ||
      process.env.MYSQL_USER_NAME === undefined ||
      process.env.MYSQL_USER_PASSWORD === undefined
    ) {
      throw Error(
        'environment variable to intialize mysql connection not found '
      );
    }
    return createConnection(this.config);
  }

  private static getMySQlDbConfig = (): MysqlConnectionOptions => ({
    type: 'mysql',
    host: process.env.MYSQL_SERVER,
    port: 3306,
    username: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_USER_PASSWORD,
    database: 'flickr_images',
    entities: [Image],
    synchronize: true,
    logging: true,
    logger: 'advanced-console'
  });
}
