import React, { useState } from 'react';
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CFormInput,
  CTable,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CBadge,
  CInputGroup,
  CInputGroupText
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilPencil, cilTrash, cilBuilding } from '@coreui/icons';

const NGOs = () => {
  const [search, setSearch] = useState('');

  const ngos = [
    { id: 1, name: 'Green Earth Foundation', regNumber: 'NGO/2024/001', phone: '9876543100', farmers: 45, status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Farmers Help Initiative', regNumber: 'NGO/2023/456', phone: '9876543101', farmers: 78, status: 'active', joined: '2023-12-01' },
    { id: 3, name: 'Sustainable Future NGO', regNumber: 'NGO/2024/789', phone: '9876543102', farmers: 32, status: 'pending', joined: '2024-02-01' },
    { id: 4, name: 'Rural Development Trust', regNumber: 'NGO/2023/234', phone: '9876543103', farmers: 56, status: 'active', joined: '2023-11-20' },
    { id: 5, name: 'Eco Warriors', regNumber: 'NGO/2024/567', phone: '9876543104', farmers: 23, status: 'active', joined: '2024-01-25' },
    { id: 6, name: 'Green India', regNumber: 'NGO/2023/890', phone: '9876543105', farmers: 67, status: 'inactive', joined: '2023-10-15' },
  ];

  const filteredNGOs = ngos.filter(ngo => 
    ngo.name.toLowerCase().includes(search.toLowerCase()) ||
    ngo.regNumber.toLowerCase().includes(search.toLowerCase()) ||
    ngo.phone.includes(search)
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'success';
      case 'pending': return 'warning';
      case 'inactive': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <>
      <CRow className="mb-4">
        <CCol>
          <h4 style={{ color: '#344e41' }}>NGOs Management</h4>
        </CCol>
        <CCol xs="auto">
          <CButton color="primary" style={{ backgroundColor: '#588157', borderColor: '#588157' }}>
            <CIcon icon={cilBuilding} className="me-2" />
            Add New NGO
          </CButton>
        </CCol>
      </CRow>

      <CRow className="mb-4">
        <CCol md={6}>
          <CInputGroup>
            <CInputGroupText style={{ backgroundColor: 'white', borderColor: '#dad7cd' }}>
              <CIcon icon={cilSearch} />
            </CInputGroupText>
            <CFormInput
              placeholder="Search NGOs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ borderColor: '#dad7cd' }}
            />
          </CInputGroup>
        </CCol>
      </CRow>

      <CCard>
        <CCardHeader style={{ backgroundColor: 'white', borderBottom: '2px solid #dad7cd' }}>
          <strong>NGOs List</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <thead>
              <tr>
                <CTableHeaderCell>Organization</CTableHeaderCell>
                <CTableHeaderCell>Reg Number</CTableHeaderCell>
                <CTableHeaderCell>Phone</CTableHeaderCell>
                <CTableHeaderCell>Farmers</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Joined</CTableHeaderCell>
                <CTableHeaderCell>Actions</CTableHeaderCell>
              </tr>
            </thead>
            <CTableBody>
              {filteredNGOs.map(ngo => (
                <CTableRow key={ngo.id}>
                  <CTableDataCell style={{ fontWeight: '500', color: '#344e41' }}>{ngo.name}</CTableDataCell>
                  <CTableDataCell>{ngo.regNumber}</CTableDataCell>
                  <CTableDataCell>{ngo.phone}</CTableDataCell>
                  <CTableDataCell>{ngo.farmers}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={getStatusColor(ngo.status)} shape="rounded-pill" className="px-3 py-1">
                      {ngo.status}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell className="text-muted">{ngo.joined}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="light" size="sm" className="me-2" title="View">
                      {/* <CIcon icon={cilEye} /> */}
                    </CButton>
                    <CButton color="light" size="sm" className="me-2" title="Edit">
                      <CIcon icon={cilPencil} />
                    </CButton>
                    <CButton color="light" size="sm" title="Delete">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>

          {filteredNGOs.length === 0 && (
            <div className="text-center py-5">
              <div className="mb-3" style={{ fontSize: '3rem' }}>🤝</div>
              <h5>No NGOs found</h5>
              <p className="text-medium-emphasis">Try adjusting your search</p>
            </div>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default NGOs;