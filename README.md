[HttpGet("summary")]
public async Task<ActionResult<ReportStatusSummary>> GetReportStatusSummary()
{
    try
    {
        var summary = await _repository.GetReportStatusSummaryAsync();
        return Ok(summary);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Failed to retrieve report status summary.");
        return StatusCode(500, "Internal Server Error");
    }
}