import React, { useState } from "react";
import _ from "lodash";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { ResourceList } from "./components/ResourceList";
import { LoadMore } from "./components/LoadMore";

function App() {
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const URL = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${PER_PAGE}`;
  const { data, isLoading, errors } = useFetch(URL);

  if (!_.isEmpty(errors)) {
    return (
      <>
        <h2> Some errors were </h2>
        <h4> {errors} </h4>
      </>
    );
  }

  if (!data) {
    return <h1> There is not data </h1>;
  }

  const mappedData = data.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image_url,
    tips: item.brewers_tips,
    tagline: item.tagline,
    ingredients: Object.keys(item.ingredients).join(", "),
  }));

  return (
    <Box sx={{ m: 6 }}>
      <h1> Beers </h1>
      <div>
        <ResourceList list={mappedData} />
        {isLoading ? (
          <Box display="flex" flexDirection="row">
            <h2> Loading ... </h2>
            <CircularProgress />
          </Box>
        ) : (
          <LoadMore onClick={() => setPage(page + 1)} />
        )}
      </div>
    </Box>
  );
}

export default App;
