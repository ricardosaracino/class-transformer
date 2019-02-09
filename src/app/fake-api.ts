import {InMemoryDbService} from 'angular-in-memory-web-api';

export class FakeApiService implements InMemoryDbService {
  createDb() {
    const schedules = [
      {
        id: '488f408e-ba0d-4a9f-bf0f-33bdc7bbdb60',
        shiftStart: '2019-02-09T01:56:55.267Z',
        shiftEnd: '2019-02-09T01:56:55.267Z',
        actualStart: '',
        actualEnd: '',
        actualHoursApproved: false,
        location: {
          id: '488f408e-ba0d-4a9f-bf0f-33bdc7bbdb60',
          enLabel: 'Location A EN',
          frLabel: 'Location A FR',
        }
      },

      {
        id: 'bcfda0a1-2ab4-40bd-bf77-afa3b5659d18',
        shiftStart: '2019-02-09T01:56:55.267Z',
        shiftEnd: '2019-02-09T01:56:55.267Z',
        actualStart: '',
        actualEnd: '',
        actualHoursApproved: false,
        location: {
          id: '488f408e-ba0d-4a9f-bf0f-33bdc7bbdb60',
          enLabel: 'Location B EN',
          frLabel: 'Location B FR',
        }
      },
    ];

    return {
      schedules
    };
  }
}
