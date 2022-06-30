import React from "react";
import MyInput from "./../../UI/input/MyInput";
import MySelect from "./../../UI/select/MySelect";

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div>
      <MyInput
        style={{ marginTop: "20px" }}
        placeholder="search post"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <div>
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          defaultValue="sort by"
          options={[
            { value: "title", name: "by title" },
            { value: "body", name: "by description" },
          ]}
        />

        <MySelect
          value={limit}
          defaultValue="choose here"
          onChange={(value) => setLimit(value)}
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 25, name: "25" },
            { value: -1, name: "show all" },
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;
