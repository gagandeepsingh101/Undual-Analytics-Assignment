import React from 'react';
import Select from 'react-select';

const Category = ({ categories, onSelectCategory }) => {
    const options = [
        { value: '', label: 'All' },
        ...categories.map(category => ({ value: category.name, label: category.name })),
    ];

    return (
        <div className="flex items-center  gap-4">
            <h2 className="text-xl font-bold text-black">Select Category :</h2>
            <Select
                options={options}
                onChange={(option) => onSelectCategory(option.value)}
                classNamePrefix="select"
                placeholder=""
                styles={{
                    control: (provided) => ({
                        ...provided,
                        width:"200px",
                    }),
                }}
                defaultValue={options[0]} // Set default value to "All"
            />
        </div>
    );
};

export default Category;
