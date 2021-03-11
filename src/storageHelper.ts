import { ContainerClient } from "@azure/storage-blob";

export async function clearTargetStorageContainer(targetPath: string) {
  const client = new ContainerClient(targetPath);

  const blobs = client.listBlobsFlat();
  for await (const blob of blobs) {
    await client.deleteBlob(blob.name);
  }
}
