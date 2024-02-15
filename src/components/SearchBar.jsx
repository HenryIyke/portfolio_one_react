import { FaSearch } from "react-icons/fa"
import "./SearchBar.css"
import { useState } from "react"

const SearchBar = ({ placeholder, datum }) => {
    const [filteredData, setFilteredData] = useState({});
    const [idEntered, setIdEntered] = useState({});

    const handleFilter = (event) => {
      const searchID = event.target.value;
      setIDEntered(searchID);
      const newFilter = datum.filter((value) => {
        return value.id.includes(searchID);
      });

      if (searchID === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };

  return (
    <div className="input_wrapper">
        <FaSearch id="search_icon" />
        <input type="number" placeholder="{placeholder}" value={idEntered}
          onChange={handleFilter}/>   

        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 2).map((value,) => {
              return (
                  <p>{value.title} </p>
              );
            })}
          </div>
        )}
    </div>
  );
}

export default SearchBar