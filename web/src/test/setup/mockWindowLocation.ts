const { location } = global as any;
delete (global as any).location;
(global as any).location = { ...location, reload: jest.fn() };

export {};
