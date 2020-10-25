import { Connection, QueryRunner } from 'typeorm';

export async function inTransaction(
  connection: Connection,
  callback: (queryRunner: QueryRunner) => Promise<any>,
) {
  let hasError = false;
  const queryRunner = connection.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    return await callback(queryRunner);
  } catch (err) {
    hasError = true;
    throw err;
  } finally {
    if (hasError) {
      await queryRunner.rollbackTransaction();
    } else {
      await queryRunner.commitTransaction();
    }
    await queryRunner.release();
  }
}
