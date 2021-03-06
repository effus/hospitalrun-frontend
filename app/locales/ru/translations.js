export default {
  admin: {
    address: {
      address1Label: '',
      address2Label: '',
      address3Label: '',
      address4Label: '',
      addressLabel: '',
      editTitle: 'Настройки Адреса',
      include1Label: '',
      include2Label: '',
      include3Label: '',
      include4Label: '',
      messages: { addressSaved: 'Настройки Адреса сохранены' },
      newTitle: 'Настройки Адреса',
      titles: { optionsSaved: 'Настройки сохранены' }
    },
    addressOptions: 'Настройки Адреса',
    customForms: {
      buttons: {
        addField: 'Добавить Поле',
        moveDown: 'Подвинуть вниз',
        moveUp: 'Подвинуть вверх',
        newForm: '+ Новая форма',
        preview: 'Просмотр'
      },
      labels: {
        alwaysInclude: 'Всегда добавлять',
        checkbox: 'Элемент Checkbox',
        colSpan: 'Количество Столбцов Для Объединения',
        columns: 'Столбцы',
        customForm: 'Расширенная Форма',
        dischargeReportFormType: 'Отчет о выписке',
        formName: 'Название Формы',
        formType: 'Тип Формы',
        incidentFormType: 'Инцидент',
        includeOtherOption: 'Добавить Другую Опцию',
        labFormType: 'Лаборатория',
        label: 'Метка',
        newForm: 'Новая Форма',
        opdReportFormType: 'Амбулаторный Отчет',
        operativePlanFormType: 'Оперативный план и отчет',
        otherOptionLabel: 'Метка Другой Опции',
        patientFormType: 'Пациент',
        property: 'Свойство',
        radio: 'Элемент Radio',
        select: 'Элемент Список',
        socialworkFormType: 'Социальная Работа',
        text: 'Текст',
        textarea: 'Длинный Текст',
        visitFormType: 'Визит'
      },
      messages: { formSaved: 'Форма {{name}} сохранена.' },
      titles: {
        checkboxValues: 'Значения Checkbox',
        customForms: 'Расширенные Формы',
        deleteForm: 'Удалить Расширенную Форму',
        dropDownValues: 'Значения Списка',
        editCustomForm: 'Редактировать Расширенную Форму',
        fields: 'Поля',
        formSaved: 'Форма Сохранена',
        newCustomForm: 'Новая Расширенная Форма',
        radioValues: 'Значения Radio'
      }
    },
    header: {
      editTitle: 'Настройки Заголовка',
      facilityName: 'Название Объекта',
      headerLabel: 'Заголовок',
      headerLine1: 'Линия Заголовка 1',
      headerLine2: 'Линия Заголовка 2',
      headerLine3: 'Линия Заголовка 3',
      logoURL: 'URL логотипа',
      messages: { headerSaved: 'Настройки заголовка сохранены' },
      newTitle: 'Настройки Заголовка',
      titles: { optionsSaved: 'Настройки сохранены' }
    },
    loadDb: 'Загрузка Базы',
    loaddb: {
      displayAlertMessage: 'Пожалуйста, выберите файл для загрузки',
      displayAlertTitle: 'Выберите файл',
      editTitle: 'Загрузка Базы',
      errorDisplayAlertMessage: 'Не удалось импортировать Базу. Ошибка: {{error}}',
      errorDisplayAlertTitle: 'Ошибка Загрузки',
      progressMessage: 'Подождите, пока База загружается.',
      progressTitle: 'Загрузка Базы'
    },
    lookup: {
      aisleLocationList: '',
      alertImportListMessage: 'Выберите файл для импорта',
      alertImportListSaveMessage: '',
      alertImportListSaveTitle: 'Список Импортирован',
      alertImportListTitle: 'Выберите файл для импорта',
      alertImportListUpdateMessage: '',
      alertImportListUpdateTitle: 'Список сохранен',
      anesthesiaTypes: 'Виды Анестезии',
      anesthesiologists: 'Анестезиологи',
      billingCategories: '',
      clinicList: 'Расположение клиник',
      countryList: 'Страны',
      cptCodeList: 'Коды CPT',
      diagnosisList: 'Диагнозы',
      edit: { template: {
        addTitle: 'Добавить',
        editTitle: 'Редактировать',
        labelTitle: 'Значение',
        updateButtonTextAdd: 'Добавить',
        updateButtonTextUpdate: 'Обновить'
      } },
      expenseAccountList: 'Счета Расходов',
      imagingPricingTypes: '',
      incidentDepartments: '',
      inventoryTypes: '',
      labPricingTypes: '',
      pageTitle: '',
      patientStatusList: '',
      physicianList: 'Врачи',
      procedureList: 'Процедуры',
      procedureLocations: '',
      procedurePricingTypes: '',
      radiologists: 'Рентгенологи',
      titles: { deleteLookupValue: 'Удалить' },
      unitTypes: '',
      vendorList: '',
      visitLocationList: '',
      visitTypes: '',
      wardPricingTypes: '',
      warehouseList: ''
    },
    lookupLists: '',
    roles: {
      capability: {
        addAllergy: 'Добавить аллергию',
        addAppointment: 'Добавить встречу',
        addBillingDiagnosis: '',
        addCharge: 'Добавить стоимость',
        addDiagnosis: 'Добавить диагнозы',
        addImaging: '',
        addIncident: 'Добавить инцидент',
        addIncidentCategory: 'Добавить категорию инцидентов',
        addInventoryItem: '',
        addInventoryPurchase: '',
        addInventoryRequest: '',
        addInvoice: 'Добавить счет',
        addLab: 'Добавить лабораторию',
        addMedication: 'Добавить лечение',
        addNote: 'Добавить заметку',
        addOperationReport: '',
        addOperativePlan: '',
        addPatient: 'Добавить пациента',
        addPayment: 'Добавить платеж',
        addPhoto: 'Добавить фото',
        addPricing: '',
        addPricingProfile: '',
        addProcedure: 'Добавить процедуру',
        addSocialwork: '',
        addVisit: 'Добавить визит',
        addVitals: '',
        adjustInventoryLocation: '',
        admin: 'Администрация',
        admitPatient: '',
        appointments: 'Встречи',
        billing: '',
        completeImaging: '',
        completeLab: '',
        defineUserRoles: '',
        deleteAppointment: 'Удалить встречу',
        deleteDiagnosis: 'Удалить диагнозы',
        deleteImaging: '',
        deleteIncident: 'Удалить инциденты',
        deleteIncidentCategory: 'Удалить категорию инцидентов',
        deleteInventoryItem: '',
        deleteInvoice: 'Удалить счет',
        deleteLab: 'Удалить лабораторию',
        deleteMedication: 'Удалить лечение',
        deleteNote: 'Удалить запись',
        deletePatient: 'Удалить пациента',
        deletePhoto: 'Удалить фото',
        deletePricing: '',
        deletePricingProfile: '',
        deleteProcedure: 'Удалить процедуру',
        deleteSocialwork: '',
        deleteVisit: 'Удалить визит',
        deleteVitals: '',
        dischargePatient: '',
        editInvoice: 'Редактировать счет',
        fulfillInventory: '',
        fulfillMedication: '',
        generateIncidentReport: 'Сгенерировать Отчет об Инциденте',
        imaging: '',
        incident: 'Инцидент',
        inventory: '',
        invoices: 'Счета',
        labs: 'Лаборатории',
        loadDb: 'Загрузка Базы',
        manageIncidents: 'Управление Инцидентами',
        medication: 'Лечение',
        overrideInvoice: '',
        patientReports: '',
        patients: 'Пациенты',
        pricing: '',
        updateConfig: 'Обновить конфигурацию',
        visits: 'Визиты'
      },
      messages: { roleSaved: 'Роль {{roleName}} сохранена.' },
      titles: { roleSaved: 'Роль сохранена' }
    },
    userRoles: '',
    users: '',
    visitForms: {
      labels: {
        followup: '',
        form: '',
        initial: '',
        visitType: ''
      },
      titles: { visitForms: '' }
    },
    workflow: {
      admissionDepositLabel: '',
      clinicPrepaymentLabel: '',
      editTitle: '',
      followupPrepaymentLabel: '',
      messages: { optionsSaved: '' },
      newTitle: '',
      outpatientImagingLabel: '',
      outpatientLabLabel: '',
      outpatientMedicationLabel: '',
      titles: { optionsSaved: '' },
      workflowLabel: ''
    }
  },
  alerts: {
    errorExclamation: '',
    pleaseWait: '',
    reportError: '',
    warningExclamation: ''
  },
  allergies: {
    buttons: { addAllergy: '' },
    labels: {
      allergyName: '',
      patientAllergy: ''
    },
    titles: {
      addAllergy: '',
      editAllergy: ''
    }
  },
  application: {
    messages: { sessionExpired: '' },
    titles: { sessionExpired: '' }
  },
  appointments: {
    buttons: {
      newButton: '',
      scheduleSurgery: ''
    },
    calendarTitle: '',
    currentScreenTitle: '',
    editTitle: '',
    labels: {
      noLocation: '',
      selectedStartingDate: ''
    },
    messages: {
      appointmentSaved: '',
      endTimeLaterThanStart: ''
    },
    missed: '',
    newTitle: '',
    searchTitle: '',
    sectionTitle: '',
    thisWeek: '',
    titles: {
      appointmentSaved: '',
      editSurgicalAppointment: '',
      newSurgicalAppointment: '',
      theaterSchedule: ''
    },
    todayTitle: ''
  },
  billing: {
    alerts: {
      noInvoiceFound: '',
      noPricingItems: '',
      noPricingProfiles: ''
    },
    buttons: {
      addOverride: '',
      createInvoice: ''
    },
    labels: {
      actualCharges: '',
      discountAmount: '',
      discountPercentage: '',
      externalInvoiceNumber: '',
      hmoCom: '',
      insurance: '',
      paymentProfile: '',
      paymentsDeposits: '',
      pricingPanelOverrides: '',
      pricingProfile: ''
    }
  },
  buttons: {
    add: 'Добавить',
    addItem: '',
    addLineItem: '',
    addValue: '',
    addVisit: '',
    allRequests: '',
    barcode: '',
    cancel: 'Отметить',
    clear: '',
    close: '',
    complete: 'Готово',
    'delete': '',
    dispense: '',
    edit: '',
    filter: '',
    fulfill: '',
    'import': '',
    loadFile: '',
    newItem: '',
    newNote: '',
    newRequest: '',
    newRequestPlus: '',
    newUser: '',
    ok: 'Ок',
    remove: '',
    returnButton: 'Вернутся',
    search: '',
    showAll: '',
    showFewer: '',
    update: 'Обновить'
  },
  components: {
    chargesByTypeTab: { charges: '' },
    customFormManager: { buttons: { addForm: '' } },
    dateTimePicker: {
      amHour: '',
      midnight: '',
      noon: '',
      pmHour: ''
    },
    imageUpload: { messages: { selectValidImageFile: '' } },
    operativeProcedures: {
      buttons: { addProcedure: '' },
      labels: { procedure: '' },
      titles: { procedures: '' }
    },
    patientOrders: {
      buttons: {
        newImaging: '',
        newLab: '',
        newMedication: ''
      },
      labels: {
        imagingOrderType: '',
        labOrderType: '',
        medicationOrderType: '',
        orderType: ''
      }
    },
    priceList: { charges: '' },
    quantityCalc: { result: '' },
    quantityConv: {
      conversion: '',
      unit: ''
    },
    sortableColumn: { labels: { selectAll: '' } },
    takePhoto: {
      camera: '',
      how: '',
      labels: {
        takeAPicture: '',
        uploadAFile: ''
      },
      photo: '',
      preview: '',
      takePhoto: '',
      uploadFile: ''
    },
    upcomingAppointments: {
      labels: {
        date: '',
        location: '',
        type: '',
        'with': ''
      },
      titles: { upcomingAppointments: '' }
    }
  },
  customForms: {
    buttons: { addForm: '' },
    labels: { formToAdd: '' },
    titles: { addCustomForm: '' }
  },
  dashboard: {
    setup: '',
    title: 'Что вы хотите сделать?'
  },
  dates: {
    'long': '',
    longOmitDays: '',
    longOmitDaysPlural: '',
    longOmitDaysYears: '',
    longOmitYears: '',
    longPlural: '',
    'short': '',
    shortOmitYears: ''
  },
  diagnosis: {
    labels: {
      activeDiagnosis: '',
      date: '',
      diagnosis: '',
      secondaryDiagnosis: ''
    },
    titles: {
      addDiagnosis: '',
      editDiagnosis: ''
    }
  },
  errors: {
    accepted: '',
    blank: '',
    confirmation: '',
    empty: '',
    equalTo: '',
    even: '',
    exclusion: '',
    greaterThan: '',
    greaterThanOrEqualTo: '',
    inclusion: '',
    invalid: '',
    invalidNumber: '',
    lessThan: '',
    lessThanOrEqualTo: '',
    notANumber: '',
    notAnInteger: '',
    odd: '',
    otherThan: '',
    present: '',
    result: '',
    tooLong: '',
    tooShort: '',
    wrongLength: ''
  },
  headings: { chargedItems: '' },
  imaging: {
    alerts: {
      completedMessage: 'Запрос на визуализацию удовлетворён.',
      completedTitle: 'Визуализация выполнена',
      savedMessage: 'Запрос на визуализацию сохранён.',
      savedTitle: 'Запрос сохранён'
    },
    buttons: { newButton: '+ новый запрос' },
    labels: {
      addNewVisit: '--Добавить новый тип осмотра--',
      radiologist: 'Радиолог'
    },
    messages: { noCompleted: 'Не найдено выполненых запросов.' },
    pageTitle: 'Запросы на визуализацию',
    sectionTitle: 'Визуализация',
    titles: {
      completedImaging: 'Выполненые запросы',
      editTitle: 'Редактировать запрос на визуализацию',
      newTitle: 'Новый запрос на визуализацию'
    }
  },
  incident: {
    buttons: {
      add: '',
      addForm: '',
      addItem: '',
      cancel: '',
      'delete': '',
      download: '',
      edit: '',
      'export': '',
      generateRep: '',
      newAttachment: '',
      newCategory: '',
      newIncident: '',
      newNote: ''
    },
    labels: {
      actions: '',
      addedBy: '',
      category: '',
      categoryItem: '',
      date: '',
      dateRecorded: '',
      department: '',
      description: '',
      endDate: '',
      givenBy: '',
      howToAddAttachment: '',
      incidentDate: '',
      incidentId: '',
      item: '',
      lastUpdated: '',
      note: '',
      patientId: '',
      patientImpacted: '',
      reportType: '',
      reportedBy: '',
      reportedDate: '',
      reportedTo: '',
      sentinelEvent: '',
      startDate: '',
      status: '',
      statusActive: '',
      statusClosed: '',
      statusFollowup: '',
      statusReported: '',
      title: '',
      total: '',
      updatedBy: ''
    },
    messages: {
      attachmentFileRequired: '',
      createNew: '',
      createNewIncidentCategory: '',
      fillIn: '',
      incidentCategorySaved: '',
      noClosedIncidents: '',
      noIncidentCategoriesFound: '',
      noIncidents: '',
      saved: '',
      selectExistingPatient: ''
    },
    titles: {
      addAttachment: '',
      addCategoryItem: '',
      addNote: '',
      attachments: '',
      closed: '',
      current: '',
      deleteAttachment: '',
      deleteIncident: '',
      deleteIncidentCategory: '',
      deleteItem: '',
      deleteNote: '',
      editAttachment: '',
      editIncident: '',
      editIncidentCategory: '',
      editNote: '',
      general: '',
      history: '',
      incidentCategories: '',
      incidentCategoryItem: '',
      incidentCategoryName: '',
      incidentCategorySaved: '',
      incidentSaved: '',
      incidents: '',
      incidentsByCategory: '',
      incidentsByDepartment: '',
      newIncident: '',
      newIncidentCategory: '',
      notes: '',
      reports: ''
    }
  },
  inventory: {
    edit: {
      cost: '',
      delivered: '',
      location: '',
      prescription: '',
      pulled: '',
      quantity: '',
      reason: '',
      returned: '',
      transferredFrom: '',
      transferredTo: ''
    },
    labels: {
      action: '',
      add: '',
      addAdjustmentType: '',
      adjust: '',
      adjustmentDate: '',
      adjustmentFor: '',
      adjustmentType: '',
      aisle: '',
      aisleLocation: '',
      allInventory: '',
      allItems: '',
      availableQuantity: '',
      billTo: '',
      consumePurchases: '',
      consumptionRate: '',
      cost: '',
      costPerUnit: '',
      crossReference: '',
      currentQuantity: '',
      dateCompleted: '',
      dateEffective: '',
      dateEnd: '',
      dateReceived: '',
      dateStart: '',
      dateTransferred: '',
      daysLeft: '',
      deleteItem: '',
      deliveryAisle: '',
      deliveryLocation: '',
      details: '',
      distributionUnit: '',
      editItem: '',
      expense: '',
      expirationDate: '',
      fulfillRequest: '',
      fulfillRequestNow: '',
      gift: '',
      giftInKindNo: '',
      giftInKindYes: '',
      giftUsage: '',
      inventoryConsumed: '',
      inventoryItem: '',
      inventoryObsolence: '',
      invoiceItems: '',
      invoiceLineItem: '',
      invoiceNumber: '',
      item: '',
      itemNumber: '',
      items: '',
      location: '',
      locations: '',
      markAsConsumed: '',
      name: '',
      newItem: '',
      originalQuantity: '',
      print: '',
      printBarcode: '',
      printer: '',
      pullFrom: '',
      purchaseCost: '',
      purchaseInfo: '',
      purchases: '',
      quantity: '',
      quantityAvailable: '',
      quantityOnHand: '',
      quantityRequested: '',
      rank: '',
      reason: '',
      remove: '',
      removeAdjustmentType: '',
      reorderPoint: '',
      requestedItems: '',
      returnAdjustmentType: '',
      returnToVendorAdjustmentType: '',
      salePricePerUnit: '',
      save: '',
      serialNumber: '',
      total: '',
      totalCost: '',
      totalReceived: '',
      transaction: '',
      transactions: '',
      transfer: '',
      transferFrom: '',
      transferTo: '',
      transferToAisle: '',
      unit: '',
      unitCost: '',
      vendor: '',
      vendorItemNumber: '',
      writeOffAdjustmentType: '',
      xref: ''
    },
    messages: {
      adjust: '',
      createRequest: 'Создать новый запрос?',
      itemNotFound: '',
      loading: '',
      noItems: '',
      noRequests: 'Запросов не найдено.',
      purchaseSaved: '',
      quantity: '',
      removeItem: '',
      removeItemRequest: '',
      requestFulfilled: '',
      requestUpdated: '',
      warning: ''
    },
    reports: {
      adjustment: '',
      daysSupply: '',
      expenseDetail: '',
      expenseSum: '',
      expiration: '',
      'export': '',
      fields: '',
      finance: '',
      generate: '',
      invLocation: '',
      invValuation: '',
      purchaseDetail: '',
      purchaseSum: '',
      reportType: '',
      rows: {
        adjustments: '',
        adjustmentsTotal: '',
        balanceBegin: '',
        balanceEnd: '',
        category: '',
        consumed: '',
        consumedGik: '',
        consumedGikTotal: '',
        consumedPuchases: '',
        consumedPurchasesTotal: '',
        consumedTotal: '',
        errInFinSum: '',
        errInFindPur: '',
        errInFindReq: '',
        expensesFor: '',
        noAccount: '',
        subtotal: '',
        subtotalFor: '',
        total: '',
        totalFor: '',
        totalPurchases: '',
        transfer1: '',
        trasnfer2: ''
      },
      stockTransferDetail: '',
      stockTransferSum: '',
      stockUsageDetail: '',
      stockUsageSum: '',
      titleDateRange: '',
      titleSingleDate: ''
    },
    titles: {
      addPurchase: '',
      addRequest: '',
      adjustment: '',
      editPurchase: '',
      editRequest: '',
      inventoryItem: '',
      inventoryReport: '',
      purchaseSaved: '',
      quickAddTitle: '',
      removeItem: '',
      requestFulfilled: '',
      requestUpdated: '',
      transfer: '',
      warning: ''
    }
  },
  labels: {
    action: 'Действие',
    actions: 'Действия',
    addNewOutpatientVisit: '',
    address: '',
    age: 'Возраст',
    allDay: '',
    amount: '',
    anesthesia: '',
    assisting: '',
    balanceDue: '',
    billDate: '',
    billTo: '',
    category: '',
    completed: 'Выполненые',
    country: '',
    cptcode: '',
    creditTo: '',
    date: '',
    dateCompleted: 'Дата Выполнения',
    dateOfBirth: '',
    dateOfBirthShort: '',
    datePaid: '',
    dateRequested: 'Дата Запроса',
    'delete': '',
    deleteRequest: '',
    deleteUser: '',
    department: '',
    description: '',
    discount: '',
    displayName: '',
    docRead: '',
    docWritten: '',
    edit: 'Редактировать',
    editUser: '',
    email: '',
    endDate: '',
    endTime: '',
    excess: '',
    expenseTo: '',
    fileLoadSuccessful: '',
    fileName: '',
    fileToLoad: '',
    fulfill: 'Отправить',
    fulfillRequest: '',
    fulfillRequestNow: '',
    fulfilled: '',
    grandTotal: '',
    id: 'Номер',
    imageOrders: '',
    imagingType: 'Тип визуализации',
    importFile: '',
    invoiceId: '',
    labOrders: '',
    lineItems: '',
    loading: '',
    location: '',
    lookupType: '',
    medication: '',
    name: 'Имя',
    newUser: '',
    note: '',
    notes: 'Заметки',
    number: '',
    on: '',
    password: '',
    patient: 'Пациент',
    payments: '',
    physician: '',
    prescriber: '',
    prescription: '',
    prescriptionDate: '',
    price: '',
    print: '',
    procedures: '',
    provider: '',
    pullFrom: '',
    quantity: 'Количество',
    remarks: '',
    requestedBy: 'Запрошен',
    requestedOn: 'Запрошен',
    requests: 'Ожидающие',
    result: 'Результат',
    results: 'Результаты',
    role: '',
    search: '',
    sex: 'Пол',
    startDate: '',
    startTime: '',
    status: '',
    takenBy: '',
    total: '',
    type: '',
    userCanAddNewValue: '',
    username: '',
    value: '',
    view: '',
    visit: 'Осмотр',
    'with': ''
  },
  labs: {
    alerts: {
      requestCompletedMessage: '',
      requestCompletedTitle: '',
      requestSavedMessage: '',
      requestSavedTitle: ''
    },
    buttons: { newButton: '' },
    completedTitle: '',
    deleteTitle: '',
    editTitle: '',
    labels: {
      addNewVisit: '',
      labType: ''
    },
    messages: {
      createNewRecord: '',
      noCompleted: '',
      noItemsFound: ''
    },
    newTitle: '',
    requestsTitle: '',
    sectionTitle: ''
  },
  languages: {
    en: 'английский',
    fr: 'Французский',
    es: 'испанский',
    de: 'Немецкий',
    ru: 'русский',
    'es-co': 'Испанский (колумбийский)',
    'pt-br': 'Португальский (бразильский)',
    tr: 'турецкий',
    ur: 'урду'
  },
  loading: {
    messages: {
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
      '10': '',
      '11': ''
    },
    progressBar: { progress: '' }
  },
  login: {
    labels: {
      password: 'Пароль',
      signIn: 'Войти',
      username: 'Имя пользователя'
    },
    messages: {
      error: 'Неверное имя пользователя или пароль.',
      signIn: 'войдите в систему'
    }
  },
  medication: {
    alerts: {
      fulfilledTitle: '',
      returnedMessage: '',
      returnedTitle: '',
      savedMessage: '',
      savedTitle: ''
    },
    buttons: {
      dispenseMedication: '',
      newButton: '',
      returnMedication: ''
    },
    labels: {
      adjustmentDate: '',
      creditToAccount: '',
      quantityDispensed: '',
      quantityDistributed: '',
      quantityRequested: '',
      quantityToReturn: '',
      refills: '',
      returnAisle: '',
      returnLocation: '',
      returnReason: ''
    },
    messages: { createNew: '' },
    pageTitle: '',
    returnMedication: '',
    sectionTitle: '',
    titles: {
      completedMedication: '',
      editMedicationRequest: '',
      newMedicationRequest: ''
    }
  },
  messages: {
    createNewRecord: 'Создать новую запись?',
    createNewUser: '',
    'delete': '',
    delete_plural: '',
    delete_singular: '',
    forAuthorizedPersons: 'Этот отчет предназначен только для уполномоченных лиц.',
    newPatientHasToBeCreated: '',
    noHistoryAvailable: '',
    noItemsFound: 'Ничего не найдено.',
    noNotesAvailable: '',
    noUsersFound: '',
    onBehalfOf: '',
    reportError: '',
    requiredFieldsCorrectErrors: '',
    saveActionException: '',
    sorry: '',
    userHasBeenSaved: '',
    userSaved: ''
  },
  models: {
    appointment: {
      labels: {
        allDay: '',
        appointmentDate: '',
        appointmentType: '',
        endDate: '',
        location: '',
        notes: '',
        patient: '',
        provider: '',
        startDate: '',
        status: '',
        type: ''
      },
      names: {
        plural: '',
        singular: ''
      }
    },
    attachment: { names: {
      plural: '',
      singular: ''
    } },
    form: { names: {
      plural: '',
      singular: ''
    } },
    imaging: {
      names: '',
      request: {
        plural: '',
        singular: ''
      }
    },
    incident: { names: {
      plural: '',
      singular: ''
    } },
    item: { names: {
      plural: '',
      singular: ''
    } },
    lab: {
      names: {
        plural: '',
        singular: ''
      },
      request: {
        plural: '',
        singular: ''
      }
    },
    medication: {
      names: {
        plural: '',
        singular: ''
      },
      request: {
        plural: '',
        singular: ''
      }
    },
    note: { names: {
      plural: '',
      singular: ''
    } },
    patient: {
      labels: { name: '' },
      names: { singular: '' }
    },
    procedure: { names: {
      plural: '',
      singular: ''
    } },
    user: { names: {
      plural: '',
      singular: ''
    } },
    visit: { names: {
      plural: '',
      singular: ''
    } },
    vital: { names: {
      plural: '',
      singular: ''
    } }
  },
  navigation: {
    about: '',
    actions: {
      login: '',
      logout: '',
      selectLanguage: 'Выберите язык'
    },
    administration: '',
    billing: '',
    imaging: '',
    incident: '',
    inventory: '',
    labs: '',
    medication: '',
    patients: '',
    scheduling: '',
    subnav: {
      actions: '',
      addAppointment: '',
      addressFields: '',
      admittedPatients: '',
      appointmentSearch: '',
      appointmentsCalendar: '',
      appointmentsThisWeek: '',
      completed: '',
      currentIncidents: '',
      customForms: '',
      dispense: '',
      history: '',
      incidentCategories: '',
      inventoryReceived: '',
      invoices: '',
      items: '',
      loadDB: '',
      lookupLists: '',
      missedAppointments: '',
      newIncident: '',
      newInvoice: '',
      newPatient: '',
      newRequest: '',
      newUser: '',
      outpatient: '',
      patientListing: '',
      priceProfiles: '',
      prices: '',
      printHeader: '',
      reports: '',
      requests: '',
      returnMedication: '',
      scheduleSurgery: '',
      theaterSchedule: '',
      "today'sAppointments": '',
      userRoles: '',
      users: '',
      workflow: ''
    }
  },
  operationReport: {
    labels: {
      additionalNotes: '',
      assistant: '',
      caseComplexity: '',
      operationDescription: '',
      preOpPrimaryDiagnosis: '',
      preOpSecondaryDiagnosis: '',
      surgeon: '',
      surgeryDate: ''
    },
    messages: { reportSaved: '' },
    titles: {
      editTitle: '',
      newTitle: '',
      reportSaved: ''
    }
  },
  operativePlan: {
    buttons: { completePlan: '' },
    labels: {
      additionalNotes: '',
      admissionInstructions: '',
      caseComplexity: '',
      completedStatus: '',
      droppedStatus: '',
      operationDescription: '',
      plannedStatus: '',
      status: '',
      surgeon: ''
    },
    messages: {
      planCompleted: '',
      planSaved: ''
    },
    titles: {
      editTitle: '',
      newTitle: '',
      planCompleted: '',
      planSaved: ''
    }
  },
  patients: {
    buttons: {
      addContact: '',
      addExpense: '',
      addFamilyMember: '',
      addOperativePlan: '',
      backToPatients: '',
      download: '',
      editOperativePlan: '',
      newAppointment: '',
      newImaging: '',
      newLab: '',
      newMedication: '',
      newPatient: '',
      newPhoto: '',
      newVisit: '',
      patientCheckIn: '',
      scheduleSurgery: ''
    },
    labels: {
      admissionDate: '',
      admit: '',
      bloodType: '',
      caption: '',
      civilStatus: '',
      clinic: '',
      contacts: '',
      cost: '',
      dateOfBirth: '',
      dateProcessed: '',
      dischargeDate: '',
      dob: '',
      education: '',
      email: '',
      externalPatientId: '',
      firstName: '',
      income: '',
      insurance: '',
      lastName: '',
      middleName: '',
      monthlyCost: '',
      occupation: '',
      operativePlan: '',
      parent: '',
      patientDays: '',
      patientType: '',
      patientTypeCharity: '',
      patientTypePrivate: '',
      phone: '',
      placeOfBirth: '',
      primaryDiagnosis: '',
      referredBy: '',
      referredDate: '',
      relationship: '',
      relationships: '',
      religion: '',
      secondaryDiagnosis: '',
      sex: '',
      sexNotEntered: '',
      sources: '',
      status: '',
      totalMontlyExpense: ''
    },
    messages: {
      areYouSureDelete: '',
      createNewPatient: '',
      deletingPatient: '',
      noPatientsFound: '',
      notFoundQuickAdd: '',
      photoFileRequired: '',
      savedPatient: ''
    },
    navigation: {
      appointments: '',
      general: '',
      history: '',
      imaging: '',
      labs: '',
      medication: '',
      photos: '',
      socialWork: '',
      visits: ''
    },
    notes: {
      newNote: '',
      onBehalfOfCopy: '',
      onBehalfOfLabel: '',
      pleaseSelectAVisit: '',
      updateNote: ''
    },
    titles: {
      addContact: '',
      addPhoto: '',
      additionalContacts: '',
      admissionsDetail: '',
      admissionsSummary: '',
      admittedPatients: '',
      'delete': '',
      deleteContact: '',
      deleteExpense: '',
      deleteFamilyMember: '',
      deletePatientRecord: '',
      deletePhoto: '',
      diagnosticTesting: '',
      dischargesDetail: '',
      dischargesSummary: '',
      edit: '',
      editPhoto: '',
      expenses: '',
      familyInfo: '',
      familyInformation: '',
      'new': '',
      outpatientsForDate: '',
      patient: '',
      patientListing: '',
      patientReport: '',
      patientStatus: '',
      proceduresDetail: '',
      proceduresSummary: '',
      savedPatient: '',
      socialWork: '',
      todaysOutpatients: '',
      totalPatientDays: '',
      totalPatientDaysDetailed: '',
      visit: ''
    }
  },
  print: { invoice: {
    labels: {
      billedBy: '',
      billedDate: '',
      dateAdmitted: '',
      dateDischarged: '',
      dischargeNotes: '',
      patientAddress: '',
      patientAge: '',
      patientId: '',
      patientName: '',
      remarks: '',
      spacer: ''
    },
    messages: { whereConducted: '' },
    titles: {
      billingStatement: '',
      patientMember: '',
      patients: '',
      relContact: ''
    }
  } },
  procedures: {
    buttons: { addMedication: '' },
    labels: { medicationUsed: '' },
    messages: { saved: '' },
    titles: {
      addChargeItem: '',
      addMedicationUsed: '',
      deleteChargeItem: '',
      deleteMedicationUsed: '',
      edit: '',
      editChargeItem: '',
      editMedicationUsed: '',
      medicationUsed: '',
      'new': '',
      saved: ''
    }
  },
  reports: {
    labels: {
      admissionDate: '',
      allProcedures: '',
      completedBy: '',
      dischargeDate: '',
      examiner: '',
      images: '',
      labs: '',
      location: '',
      medications: '',
      nextAppointment: '',
      nextAppointments: '',
      notes: {
        author: '',
        date: '',
        title: ''
      },
      operativePlan: {
        description: '',
        instructions: '',
        procedures: '',
        title: ''
      },
      primaryDiagnosis: '',
      procedures: '',
      secondaryDiagnosis: '',
      visitDate: '',
      visitType: ''
    },
    messages: {
      'delete': '',
      saved: ''
    },
    titles: {
      dischargeReport: '',
      newDischargeReport: '',
      newOPDReport: '',
      opdReport: '',
      saved: ''
    }
  },
  user: {
    plusNewUser: '',
    usersPageTile: ''
  },
  visits: {
    buttons: {
      addDiagnosis: '',
      checkIn: '',
      checkOut: '',
      discharge: '',
      newAppointment: '',
      newDischargeReport: '',
      newOPDReport: '',
      newProcedure: '',
      newVitals: ''
    },
    labels: {
      appointment: '',
      authoredBy: '',
      checkInTime: '',
      checkOutTime: '',
      createNewPatient: '',
      diagnosis: '',
      examiner: '',
      finalDiagnosis: '',
      haveAppointment: '',
      haveDoneOrders: '',
      noAppointment: '',
      ordersDone: '',
      ordersNotDone: '',
      patientToCheckIn: '',
      procedure: '',
      procedureDate: '',
      reasonForVisit: '',
      reportType: '',
      status: '',
      statusAdmitted: '',
      statusCheckedIn: '',
      statusCheckedOut: '',
      statusDischarged: '',
      visitDate: '',
      visitInformation: '',
      visitType: ''
    },
    messages: {
      checkOut: '',
      checkedOut: '',
      discharged: '',
      patientCheckedIn: '',
      patientCreatedAndCheckedIn: '',
      visitAndPatientSaved: '',
      visitSaved: ''
    },
    navigation: {
      charges: '',
      notes: '',
      orders: '',
      procedures: '',
      reports: '',
      vitals: ''
    },
    titles: {
      additionalDiagnoses: '',
      checkOut: '',
      checkedIn: '',
      checkedOut: '',
      discharged: '',
      editVisit: '',
      newVisit: '',
      patientCheckIn: '',
      visitSaved: ''
    }
  },
  vitals: { labels: {
    dateRecorded: '',
    dbp: '',
    heartRate: '',
    height: '',
    respiratoryRate: '',
    sbp: '',
    temperature: '',
    weight: ''
  } }
};
