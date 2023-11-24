import type { FeedbackType } from '@/types/dimsum';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(
  SPREADSHEET_ID!,
  new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file']
  })
);

const appendSpreadsheet = async (row: FeedbackType, index: number) => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[index];
    await sheet.addRow({ ...row });
  } catch (e) {
    console.error('Error: ', e);
  }
};

export default appendSpreadsheet;
