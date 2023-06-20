import { useState } from "react";

const TreeNode = () => {
  const nodeId = 1;
  const [children, setChildren] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchChildrenByNodeId = async () => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setIsLoading(true);

    try {
      const response = await fetch(`/nodes/${nodeId}/children`);

      const { children } = await response.json();

      setChildren(children);
    } catch {
      setChildren([]);
      setErrorMessage("Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>{"Active structure"}</h1>
      <button onClick={fetchChildrenByNodeId}>
        {`Click here to load children of node ID ${nodeId}`}
      </button>
      {isLoading && <p>{"Loading children..."}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {children?.length > 0 && (
        <>
          <h2>{"Children are:"}</h2>
          {children.map((child) => {
            return <p>{`* ${child.name}, node ID ${child.id}`}</p>;
          })}
        </>
      )}
    </>
  );
};

export default TreeNode;
