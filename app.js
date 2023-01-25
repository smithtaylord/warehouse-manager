// Variables 

const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs',
    isMissing: false
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk',
    isMissing: false
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147',
    isMissing: false
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145',
    isMissing: false
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z',
    isMissing: false
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz',
    isMissing: false
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367',
    isMissing: false
}]

function drawPackages(array) {
    let packageElement = document.getElementById('packages')
    let shipmentList = ''
    array.forEach(package => {
        shipmentList +=
            `<div class="row">
        <div class="col-6">
            <h4>TO: ${package.to}</h4>
        </div>
        <div class="col-6">
            <h4>TRACKING: ${package.trackingNumber}</h4>
        </div>
    </div>`
    });
    packageElement.innerHTML = shipmentList
}

function filterByPriority(type) {
    const priorityType = packages.filter(package => package.priorityLevel == type)
    drawPackages(priorityType)
}

function drawFragilePackages() {
    const fragile = packages.filter(package => package.isFragile)
    drawPackages(fragile)
}

function filterByWeight(type) {
    let packageWeight = ''
    if (type == 'light') {
        packageWeight = packages.filter(package => package.weight < 1)
    }
    if (type == 'medium') {
        packageWeight = packages.filter(package => package.weight > 1 && package.weight < 10)
    }
    if (type == 'heavy') {
        packageWeight = packages.filter(package => package.weight > 10)
    }
    drawPackages(packageWeight)
}

function makeAPackageGoMissing() {
    let randomIndex = Math.floor(Math.random() * packages.length)
    let randomPackage = packages[randomIndex]
    randomPackage.isMissing = true
    console.log(packages);
    let clueElement = document.getElementById('clue')
    clueElement.innerText = `The Missing Packing is ${randomPackage.weight} pounds`
}

function giveSecondClue() {
    let missingPackage = packages.find(package => package.isMissing)
    console.log(missingPackage);
    let clueElement = document.getElementById('second-clue')
    clueElement.innerText = `The Missing Package has ${missingPackage.priorityLevel} level shipping`
}

function findPackage() {
    let package = window.prompt('Whose package is missing?')
    let missingPackage = packages.find(package => package.isMissing)
    if ((missingPackage.to.toLowerCase()) == (package.toLowerCase())) {
        window.alert('You found the missing package🎊 The customer will be so happy!')
    } else {
        window.alert('This package is already on the truck, get back to work!')
    }
}

drawPackages(packages)
makeAPackageGoMissing()
