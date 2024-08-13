// Sample data
const data = [
    {
        resort: 'Royal Floridian',
        roomSize: '1BD',
        ownershipType: 'Annual-Float',
        salePrice: '15500',
        considerations: '19400',
        downpayment: '2325',
        amountFinanced: '13175',
        paymentTerms: '246.55',
        maintenanceFee: '$851 / YR'
    },
    {
        resort: 'Royal Floridian',
        roomSize: '2BR',
        ownershipType: 'Annual-Float',
        salePrice: '21900',
        considerations: '21000',
        downpayment: '3285',
        amountFinanced: '18615',
        paymentTerms: '344.22',
        maintenanceFee: '$1049 / YR'
    }
    // Add more data as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const resortSelect = document.getElementById('resort');
    const roomSizeSelect = document.getElementById('room-size');
    const ownershipTypeSelect = document.getElementById('ownership-type');
    const salePriceSelect = document.getElementById('sale-price');
    
    // Populate the resort dropdown
    const resorts = [...new Set(data.map(item => item.resort))];
    resorts.forEach(resort => {
        if (resort) {  // Ensure the resort value is not null or undefined
            const option = document.createElement('option');
            option.value = resort;
            option.textContent = resort;
            resortSelect.appendChild(option);
        }
    });

    // Update dependent dropdowns when resort is selected
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
        roomSizeSelect.innerHTML = '';
        const roomSizes = [...new Set(data.filter(item => item.resort === resort).map(item => item.roomSize))];
        roomSizes.forEach(size => {
            if (size) {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                roomSizeSelect.appendChild(option);
            }
        });
        roomSizeSelect.dispatchEvent(new Event('change'));
    }

    function updateOwnershipTypeOptions(resort, roomSize) {
        ownershipTypeSelect.innerHTML = '';
        const ownershipTypes = [...new Set(data.filter(item => item.resort === resort && item.roomSize === roomSize).map(item => item.ownershipType))];
        ownershipTypes.forEach(type => {
            if (type) {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                ownershipTypeSelect.appendChild(option);
            }
        });
        ownershipTypeSelect.dispatchEvent(new Event('change'));
    }

    function updateSalePriceOptions(resort, roomSize, ownershipType) {
        salePriceSelect.innerHTML = '';
        const salePrices = [...new Set(data.filter(item => item.resort === resort && item.roomSize === roomSize && item.ownershipType === ownershipType).map(item => item.salePrice))];
        salePrices.forEach(price => {
            if (price) {
                const option = document.createElement('option');
                option
