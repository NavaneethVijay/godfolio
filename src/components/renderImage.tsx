// components/RenderImage.js
import React, { useEffect, useState } from "react";
import { fetchAssest } from "@/lib/contentful";

export default function RenderImage({ node }) {
  const [assetData, setAssetData] = useState(null);

  useEffect(() => {
    const getUrl = async () => {
      try {

        const id = node.data.target.sys.id
        const {asset} = await fetch(`/api/hello?id=${id}`).then(res => res.json())

        setAssetData(asset);
      } catch (error) {
        console.error("Error fetching asset:", error);
      }
    };

    getUrl();
  }, [node]);

  if (!assetData) return <div>Loading...</div>;

  return (
    <div>
      <img src={assetData.url} width={assetData.width} height={assetData.height}/>
    </div>
  );
}
