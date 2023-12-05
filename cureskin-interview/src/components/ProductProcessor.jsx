import { useEffect, useState } from "react";

import axios from "axios";

const ProductProcessor = () => {
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // get Product IDs
        setLoading(true);
        const idsResponse = await axios.get(
          `https://hacker-news.firebaseio.com/v0/jobstories.json?page=${page}&print=pretty&orderBy=%22$key%22&limitToFirst=${itemsPerPage}`
        );
        console.log("idsResponse", idsResponse.data);

        // get Product Details and Combine Data
        const detailsPromises = idsResponse.data?.map(async (id) => {
          try {
            const detailsResponse = await axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );
            return detailsResponse.data;
          } catch (detailsError) {
            throw new Error(
              `Failed to get details for product ID ${id}: ${detailsError.message}`
            );
          }
        });

        const detailsArray = await Promise.all(detailsPromises);
        setProductDetails(detailsArray);
        console.log("productDetails", productDetails);

        setLoading(false);
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, [page, itemsPerPage]);

  console.log("productDetails", productDetails);

  const timeStamptoDate = (timeStamp) => {
    let date = new Date(timeStamp).toLocaleString();
    return date;
  };

  const loadmorefn = () => {
    setPage(page + 1);
    setItemsPerPage(itemsPerPage + 6);
    setProductDetails((prev) => [...prev, ...productDetails]);
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div style={{ width: "98vw", padding: "10px" }}>
          <h2 style={{ marginBottom: "10px", color: "#ff6601" }}>
            Hacker News Jobs Board
          </h2>

          <ul>
            {loading
              ? "Loading..."
              : productDetails?.map((item) => (
                  <li key={item?.id}>
                    <div className="list-box">
                      <h3 style={{ marginBottom: "6px" }}>{item?.title}</h3>
                      <p>
                        By {item?.by} -{" "}
                        <span>{timeStamptoDate(item?.time)}</span>
                      </p>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      )}
      <button
        style={{
          backgroundColor: "#ff6601",
          border: "none",
          padding: "6px",
          color: "#fff",
          borderRadius: "3px",
          fontSize: "15px",
          fontWeight: "600",
        }}
        onClick={loadmorefn}
      >
        {loading ? "loading..." : "Load More Jobs"}
      </button>
    </div>
  );
};

export default ProductProcessor;
