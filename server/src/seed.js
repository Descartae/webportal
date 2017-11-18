import { ObjectId } from 'mongodb'

export const seedDatabase = async ({ Centers, Users, TypesOfWaste }) => {
  const centerCount = await Centers.count()
  const userCount = await Users.count()
  const typesOfWasteCount = await TypesOfWaste.count()

  if (centerCount === 0 && userCount === 0 && typesOfWasteCount === 0) {
    console.log('No data found - seeding database')

    const typesOfWaste = [
      {
        _id: new ObjectId(),
        name: 'Aluminium',
        icon: 'http://example.com/aluminium.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'Compost',
        icon: 'http://example.com/compost.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'Cooking Oil',
        icon: 'http://example.com/cookingOil.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'eWaste',
        icon: 'http://example.com/ewaste.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'Furniture',
        icon: 'http://example.com/furniture.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'Glass',
        icon: 'http://example.com/glass.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'Green Waste',
        icon: 'http://example.com/greenWaste.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'Hazardous Waste',
        icon: 'http://example.com/hazardousWaste.png',
        enabled: true
      },
      {
        _id: new ObjectId(),
        name: 'Paper',
        icon: 'http://example.com/paper.png',
        enabled: true
      }
    ]

    const user = {
      _id: new ObjectId(),
      name: 'Example User',
      email: 'user@example.com'
    }

    const centers = [
      {
        _id: new ObjectId(),
        createdBy: user._id,
        name: 'Global Plasticos',
        location: {
          address: 'Av. Caldeia 150',
          municipality: 'Porto Alegre',
          state: 'RS',
          zip: '91130-540',
          coordinates: {
            latitude: -29.985346,
            longitude: -51.1096435
          }
        },
        telephone: '+55 (51) 3364-4115',
        typesOfWaste: [
          typesOfWaste[0]._id,
          typesOfWaste[1]._id
        ],
        openHours: [
          {
            dayOfWeek: 'MONDAY',
            startTime: 8,
            endTime: 17
          },
          {
            dayOfWeek: 'TUESDAY',
            startTime: 8,
            endTime: 17
          },
          {
            dayOfWeek: 'WEDNESDAY',
            startTime: 8,
            endTime: 17
          },
          {
            dayOfWeek: 'THURSDAY',
            startTime: 8,
            endTime: 17
          },
          {
            dayOfWeek: 'FRIDAY',
            startTime: 8,
            endTime: 17
          }
        ],
        enabled: true
      },
      {
        _id: new ObjectId(),
        createdBy: user._id,
        name: 'Fkl Recargas de Cartuchos e Toners',
        location: {
          address: 'R. Germano Hasslocher 288 s 1',
          municipality: 'Porto Alegre',
          state: 'RS',
          zip: '90160-050'
        },
        telephone: '+55 (51) 3232-9300',
        typesOfWaste: [
          typesOfWaste[1]._id
        ],
        openHours: [
          {
            dayOfWeek: 'WEDNESDAY',
            startTime: 12,
            endTime: 18
          },
          {
            dayOfWeek: 'THURSDAY',
            startTime: 12,
            endTime: 18
          },
          {
            dayOfWeek: 'FRIDAY',
            startTime: 15,
            endTime: 18
          }
        ],
        enabled: true
      }
    ]

    await Users.insert(user)
    await TypesOfWaste.insert(typesOfWaste)
    await Centers.insert(centers)
  }
}
