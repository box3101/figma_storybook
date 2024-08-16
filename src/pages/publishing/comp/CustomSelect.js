import React, { useState, useMemo, useEffect } from "react";
import { Select, Input } from "antd";

const { Option } = Select;

const CustomSelect = ({
	options,
	placeholder,
	searchPlaceholder,
	width = "medium",
	size = "middle",
	showProfileInfo = false,
	numberNum,
	mode = "default",
	onChange,
	notFoundContent,
	labelKey = "label",
	valueKey = "value",
	nameKey = "name",
	departmentKey = "department",
	profileImageKey = "profileImage",
	selectedValue
}) => {
	const getWidth = () => {
		switch (width) {
			case "small":
				return "10rem";
			case "medium":
				return "15rem";
			case "large":
				return "20rem";
			default:
				return "15rem";
		}
	};
	const [searchValue, setSearchValue] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!Array.isArray(options)) {
			setError("옵션은 배열 형태여야 합니다.");
		} else if (options.length === 0) {
			setError("옵션이 비어 있습니다.");
		} else {
			setError(null);
		}
	}, [options]);

	const getOptionValue = (option, key, defaultValue = "") => {
		return option && option[key] !== undefined ? option[key] : defaultValue;
	};

	const filteredOptions = useMemo(() => {
		if (!searchValue.trim()) return options;

		return options.filter(option => {
			const searchFields = [
				getOptionValue(option, labelKey),
				getOptionValue(option, nameKey),
				getOptionValue(option, departmentKey)
			].filter(Boolean);

			return searchFields.some(
				field => field && typeof field === "string" && field.toLowerCase().includes(searchValue.toLowerCase())
			);
		});
	}, [options, searchValue, labelKey, nameKey, departmentKey]);

	const renderOption = option => {
		if (showProfileInfo) {
			return (
				<div className="profile-wrap">
					<div className="left">
						<span
							className="profile-image"
							style={{ backgroundImage: `url(${getOptionValue(option, profileImageKey)})` }}></span>
						<span className="profile-name">{getOptionValue(option, nameKey)}</span>
					</div>
					<div className="department">{getOptionValue(option, departmentKey)}</div>
				</div>
			);
		}
		return getOptionValue(option, labelKey);
	};

	const handleChange = value => {
		if (onChange) {
			onChange(value);
		}
	};

	if (error) {
		return <div style={{ color: "red" }}>{error}</div>;
	}

	return (
		<>
			<Select
				mode={mode}
				className="custom-select"
				placeholder={placeholder}
				dropdownStyle={{ minWidth: "200px", maxHeight: "300px" }}
				style={{ width: getWidth() }}
				size={size}
				notFoundContent={notFoundContent || "검색 결과가 없습니다."}
				onChange={handleChange}
				value={selectedValue}
				dropdownRender={menu => (
					<div>
						<Input
							placeholder={searchPlaceholder || "검색"}
							value={searchValue}
							onChange={e => setSearchValue(e.target.value)}
						/>
						{menu}
					</div>
				)}>
				{filteredOptions.map(option => (
					<Option key={getOptionValue(option, valueKey)} value={getOptionValue(option, valueKey)}>
						{renderOption(option)}
					</Option>
				))}
			</Select>
			{numberNum !== undefined && (
				<div className="member-num">
					총 <span>{numberNum}</span>명의 멤버
				</div>
			)}
		</>
	);
};

export default CustomSelect;
