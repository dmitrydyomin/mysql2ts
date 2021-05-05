import { tableToInterface } from './tableToInterface';

test('converts table to interface', () => {
  expect(
    tableToInterface(`
  id	int unsigned	NO	PRI	NULL	auto_increment
  channel_id	int unsigned	NO	MUL	NULL	
  datetime_created	datetime	YES		NULL	
  datetime_edited	datetime	YES		NULL	
  block_id	bigint	NO		NULL	
  element_id	int unsigned	NO		NULL	
  duration	int unsigned	NO		NULL	
  db_id	int unsigned	NO		NULL	
  datetime_starts	datetime(6)	YES		NULL	
  datetime_stops	datetime(6)	YES		NULL	
  type	int	YES		NULL	
    `)
  ).toEqual(`id: number;
channel_id: number;
datetime_created: Date | null;
datetime_edited: Date | null;
block_id: number;
element_id: number;
duration: number;
db_id: number;
datetime_starts: Date | null;
datetime_stops: Date | null;
type: number | null;`);
});
