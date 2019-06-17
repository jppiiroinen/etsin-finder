
const participantsToMetax = participants => {
  const parsedParticipant = participants.map(participant => ({
      type: participant.type,
      role: participant.role,
      name: participant.name,
      email: participant.email ? participant.email : undefined,
      identifier: participant.identifier ? participant.identifier : undefined,
      organization: participant.organization,
    }))
  return parsedParticipant
}

const handleSubmitToBackend = (values) => {
  const obj = {
    title: {
      fi: values.title.fi,
      en: values.title.en,
    },
    description: {
      fi: values.description.fi,
      en: values.description.en,
    },
    identifiers: values.otherIdentifiers,
    fieldOfScience: values.fieldOfScience ? values.fieldOfScience.url : undefined,
    keywords: values.keywords,
    participants: participantsToMetax(values.participants),
    accessType: values.accessType ? values.accessType : undefined,
    restrictionGrounds: values.restrictionGrounds ? values.restrictionGrounds.value : undefined,
    embargoDate: values.embargoExpDate,
    license: values.license ? values.license : undefined,
    otherLicenseUrl: values.otherLicenseUrl,
    // Send no values if empty instead of empty values.
    remote_resources:
      values._externalResources.length > 0 ? values._externalResources : undefined,
    files: values._selectedFiles.idaGroups ? values._selectedFiles : undefined,
    directorys: values._selectedDirectories.idaGroups ? values._selectedDirectories : undefined,
  }
  return obj
}

export default handleSubmitToBackend
