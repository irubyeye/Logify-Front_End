import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        value={filter.sort}
        defaultValue={"Сортировка"}
        options={[
          { value: "title", name: "По заголовку" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
}
