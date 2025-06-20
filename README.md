public interface IReportStatusRepository
{
    Task<ReportStatusSummaryDto> GetReportStatusSummaryAsync();
}