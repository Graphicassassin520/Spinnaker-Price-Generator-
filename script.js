// Data extracted from the PDF
const data = [
    // Royal Floridian North
    { resort: 'Royal Floridian North', roomSize: 'Studio', ownershipType: 'Annual-Float', retailPrice: '30900', considerations: '18000', salePrice: '12900', downpayment: '1935', amountFinanced: '10965', paymentTerms: '206.87', maintenanceFee: '542 / YR' },
    { resort: 'Royal Floridian North', roomSize: '1BD', ownershipType: 'Annual-Float', retailPrice: '34900', considerations: '19400', salePrice: '15500', downpayment: '2325', amountFinanced: '13175', paymentTerms: '246.55', maintenanceFee: '851 / YR' },
    { resort: 'Royal Floridian North', roomSize: '2BR', ownershipType: 'Annual-Float', retailPrice: '42900', considerations: '21000', salePrice: '21900', downpayment: '3285', amountFinanced: '18615', paymentTerms: '344.22', maintenanceFee: '1049 / YR' },
    { resort: 'Royal Floridian North', roomSize: '2 Bdr Lockout', ownershipType: 'Annual-Float', retailPrice: '48900', considerations: '24000', salePrice: '24900', downpayment: '3735', amountFinanced: '21165', paymentTerms: '390.00', maintenanceFee: '1049 / YR' },
    { resort: 'Royal Floridian North', roomSize: 'Studio', ownershipType: 'Even/Odd-Float', retailPrice: '23900', considerations: '14000', salePrice: '9900', downpayment: '1485', amountFinanced: '8415', paymentTerms: '161.08', maintenanceFee: '271 / YR' },
    { resort: 'Royal Floridian North', roomSize: '1BD', ownershipType: 'Even/Odd-Float', retailPrice: '27900', considerations: '15400', salePrice: '12500', downpayment: '1875', amountFinanced: '10625', paymentTerms: '200.76', maintenanceFee: '425.50 / YR' },
    { resort: 'Royal Floridian North', roomSize: '2BR', ownershipType: 'Even/Odd-Float', retailPrice: '31900', considerations: '18000', salePrice: '13900', downpayment: '2085', amountFinanced: '11815', paymentTerms: '222.13', maintenanceFee: '524.50 / YR' },
    { resort: 'Royal Floridian North', roomSize: '2 Bdr Lockout', ownershipType: 'Even/Odd-Float', retailPrice: '35900', considerations: '18000', salePrice: '17900', downpayment: '2685', amountFinanced: '15215', paymentTerms: '283.17', maintenanceFee: '524.50 / YR' },
    // Royal Floridian South
    { resort: 'Royal Floridian South', roomSize: '1BR', ownershipType: 'Annual-Float', retailPrice: '44900', considerations: '28000', salePrice: '16900', downpayment: '2535', amountFinanced: '14365', paymentTerms: '267.91', maintenanceFee: '860 / YR' },
    { resort: 'Royal Floridian South', roomSize: '2BR', ownershipType: 'Annual-Float', retailPrice: '55900', considerations: '28000', salePrice: '27900', downpayment: '4185', amountFinanced: '23715', paymentTerms: '435.78', maintenanceFee: '1041 / YR' },
    { resort: 'Royal Floridian South', roomSize: '1BR', ownershipType: 'Even/Odd-Float', retailPrice: '32900', considerations: '20400', salePrice: '12500', downpayment: '1875', amountFinanced: '10625', paymentTerms: '200.76', maintenanceFee: '860 / 2 YRS' },
    { resort: 'Royal Floridian South', roomSize: '2BR', ownershipType: 'Even/Odd-Float', retailPrice: '39900', considerations: '22400', salePrice: '17500', downpayment: '2625', amountFinanced: '14875', paymentTerms: '277.07', maintenanceFee: '1041 / 2 YRS' }
];

// Ensure DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const resortSelect = document.getElementById('resort');
    const roomSizeSelect = document.getElementById('room-size');
    const ownershipTypeSelect = document.getElementById('ownership-type');
    const salePriceSelect = document.getElementById('sale-price');

    // Populate the resort dropdown
    const resorts = [...new Set(data.map(item => item.resort))];

    console.log("Resorts:", resorts); // Debugging step

    resorts.forEach(resort => {
        const option = document.createElement('option');
        option.value = resort;
        option.textContent = resort;
        resortSelect.appendChild(option);
    });

    // Add event listeners to update dependent dropdowns
    resortSelect.addEventListener('change', () => {
        const selectedResort = resortSelect.value;
        updateRoomSizeOptions(selectedResort);
    });

    roomSizeSelect.addEventListener('change', () => {
        const selectedResort = resortSelect.value;
        const selectedRoomSize = roomSizeSelect.value;
        updateOwnershipTypeOptions(selectedResort, selectedRoomSize);
    });

    ownershipTypeSelect.addEventListener('change', () => {
        const selectedResort = resortSelect.value;
        const selectedRoomSize = roomSizeSelect.value;
        const selectedOwnershipType = ownershipTypeSelect.value;
        updateSalePriceOptions(selectedResort, selectedRoomSize, selectedOwnershipType);
    });

    salePriceSelect.addEventListener('change', () => {
        const selectedResort = resortSelect.value;
        const selectedRoomSize = roomSizeSelect.value;
        const selectedOwnershipType = ownershipTypeSelect.value;
        const selectedSalePrice = salePriceSelect.value;
        updateFinancialDetails(selectedResort, selectedRoomSize, selectedOwnershipType, selectedSalePrice);
    });

    function updateRoomSizeOptions(resort) {
        roomSizeSelect.innerHTML = '<option value="" disabled selected>Select a room size</option>';
        const roomSizes = [...new Set(data.filter(item => item.resort === resort).map(item => item.roomSize))];
        
        console.log("Room Sizes for " + resort + ":", roomSizes); // Debugging step

        roomSizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            roomSizeSelect.appendChild(option);
        });
        roomSizeSelect.dispatchEvent(new Event('change'));
    }

    function updateOwnershipTypeOptions(resort, roomSize) {
        ownershipTypeSelect.innerHTML = '<option value="" disabled selected>Select an ownership type</option>';
        const ownershipTypes = [...new Set(data.filter(item => item.resort === resort && item.roomSize === roomSize).map(item => item.ownershipType))];
        
        console.log("Ownership Types for " + resort + " " + roomSize + ":", ownershipTypes); // Debugging step

        ownershipTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            ownershipTypeSelect.appendChild(option);
        });
        ownershipTypeSelect.dispatchEvent(new Event('change'));
    }

    function updateSalePriceOptions(resort, roomSize, ownershipType) {
        salePriceSelect.innerHTML = '<option value="" disabled selected>Select a sale price</option>';
        const salePrices = [...new Set(data.filter(item => item.resort === resort && item.roomSize === roomSize && item.ownershipType === ownershipType).map(item => item.salePrice))];
        
        console.log("Sale Prices for " + resort + " " + roomSize + " " + ownershipType + ":", salePrices); // Debugging step

        salePrices.forEach(price => {
            const option = document.createElement('option');
            option.value = price;
            option.textContent = price;
            salePriceSelect.appendChild(option);
        });
        salePriceSelect.dispatchEvent(new Event('change'));
    }

    function updateFinancialDetails(resort, roomSize, ownershipType, salePrice) {
        const selectedData = data.find(item => item.resort === resort && item.roomSize === roomSize && item.ownershipType === ownershipType && item.salePrice === salePrice);
        
        console.log("Selected Data:", selectedData); // Debugging step

        if (selectedData) {
            document.getElementById('considerations').textContent = `Considerations: ${selectedData.considerations}`;
            document.getElementById('downpayment').textContent = `Downpayment: ${selectedData.downpayment}`;
            document.getElementById('amount-financed').textContent = `Amount Financed: ${selected
