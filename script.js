document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { resort: 'Royal Floridian North', roomSize: 'Studio', ownershipType: 'Annual-Float', salePrice: '12900' },
        { resort: 'Royal Floridian North', roomSize: '1BD', ownershipType: 'Annual-Float', salePrice: '15500' },
        { resort: 'Royal Floridian North', roomSize: '2BR', ownershipType: 'Annual-Float', salePrice: '21900' },
        { resort: 'Royal Floridian South', roomSize: '2BR', ownershipType: 'Even/Odd-Float', salePrice: '17500' }
    ];

    const resortSelect = document.getElementById('resort');
    const roomSizeSelect = document.getElementById('room-size');
    const ownershipTypeSelect = document.getElementById('ownership-type');
    const salePriceSelect = document.getElementById('sale-price');

    // Populate the resort dropdown
    const resorts = [...new Set(data.map(item => item.resort))];
    resorts.forEach(resort => {
        const option = document.createElement('option');
        option.value = resort;
        option.textContent = resort;
        resortSelect.appendChild(option);
    });

    // Debugging: Check if resorts were added
    console.log("Populated resorts:", resorts);

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
        roomSizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            roomSizeSelect.appendChild(option);
        });
    }

    function updateOwnershipTypeOptions(resort, roomSize) {
        ownershipTypeSelect.innerHTML = '<option value="" disabled selected>Select an ownership type</option>';
        const ownershipTypes = [...new Set(data.filter(item => item.resort === resort && item.roomSize === roomSize).map(item => item.ownershipType))];
        ownershipTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            ownershipTypeSelect.appendChild(option);
        });
    }

    function updateSalePriceOptions(resort, roomSize, ownershipType) {
        salePriceSelect.innerHTML = '<option value="" disabled selected>Select a sale price</option>';
        const salePrices = [...new Set(data.filter(item => item.resort === resort && item.roomSize === roomSize && item.ownershipType === ownershipType).map(item => item.salePrice))];
        salePrices.forEach(price => {
            const option = document.createElement('option');
            option.value = price;
            option.textContent = price;
            salePriceSelect.appendChild(option);
        });
    }

    function updateFinancialDetails(resort, roomSize, ownershipType, salePrice) {
        const selectedData = data.find(item => item.resort === resort && item.roomSize === roomSize && item.ownershipType === ownershipType && item.salePrice === salePrice);
        
        if (selectedData) {
            document.getElementById('considerations').textContent = `Considerations: N/A`;
            document.getElementById('downpayment').textContent = `Downpayment: N/A`;
            document.getElementById('amount-financed').textContent = `Amount Financed: N/A`;
            document.getElementById('payment-terms').textContent = `Payment Terms: N/A`;
            document.getElementById('maintenance-fee').textContent = `Maintenance Fee: N/A`;
        }
    }
});
