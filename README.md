// src/services/reportStatusService.ts
import axios from 'axios';
import { ReportStatus } from '../types/ReportStatus';

const API_BASE_URL = '/api/reportstatus';

export const getReportStatus = async (): Promise<ReportStatus> => {
  const response = await axios.get<ReportStatus>(`${API_BASE_URL}/summary`);
  return response.data;
};