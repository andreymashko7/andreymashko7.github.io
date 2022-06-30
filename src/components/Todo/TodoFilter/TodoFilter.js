import React from "react";
import MyInput from "./../../UI/input/MyInput";
import MySelect from "./../../UI/select/MySelect";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        placeholder="find by title"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="sort by default"
        options={[{ value: "title", name: "by title" }]}
      />
    </>
  );
};

export default TodoFilter;
